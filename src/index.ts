import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'koa2-cors';
import Static from 'koa-static';
import bodyParser from 'koa-bodyparser';
import path from 'path';
import {
  query,
  addLog,
  getLogs,
  getLogTotal,
  getLogTotalByCount,
  deleteLogs,
  getLogsGroupByDay,
  getLogsGroupByType,
  deleteLogsByEventKey,
} from './mysql';

const PORT = 3300;

const router = new Router();
const app = new Koa();

async function delayer(time = 2000) {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

/**
 * 获取当天零时的时间戳
 * @param date
 */
function getLocaleDateTime(date?: any) {
  return new Date(new Date(date || new Date()).toLocaleDateString()).getTime();
}
const oneDay = 1000 * 60 * 60 * 24;

/**
 * 记录数据
 */
router.post('/request', async (ctx, next) => {
  const request = ctx.request;
  if (request && request.body) {
    try {
      await addLog(request.body);
      ctx.body = {
        status: 'success',
      };
    } catch (err) {
      ctx.body = err.message;
    }
  }
});

// 获取数据,总条数
router.get('/datas', async (ctx, next) => {
  const request = ctx.request;
  if (request && request.query) {
    try {
      if (request.query) {
        const { pageNo = 1, pageSize = 500 } = request.query;
        const logs = await getLogs({ pageNo, pageSize });
        const total = await getLogTotal();
        ctx.body = {
          logs,
          total,
        };
      }
    } catch (err) {
      ctx.body = err.message;
    }
  }
});

// 按天分组统计数据
// TODO 一天内 一周内 一月内
router.get('/datasByDay', async (ctx, next) => {
  const request = ctx.request;
  let dayType = 'week';
  try {
    if (request && request.query && (request.query.type === 'week' || request.query.type === 'day')) {
      dayType = request.query.type;
    }
    const logs = await getLogsGroupByDay(dayType);
    ctx.body = {
      logs,
    };
  } catch (err) {
    ctx.body = err.message;
  }
});

// 按错误类型分组统计数据
router.get('/datasByType', async (ctx, next) => {
  try {
    const logs = await getLogsGroupByType();
    const total = await getLogTotalByCount();
    ctx.body = {
      logs,
      total,
    };
  } catch (err) {
    ctx.body = err.message;
  }
});

// 获取最新的一条数据
router.get('/latest', async (ctx, next) => {
  try {
    const logs = await getLogs({ pageNo: 1, pageSize: 1 });
    ctx.body = {
      log: logs ? logs[0] : null,
    };
  } catch (err) {
    ctx.body = err.message;
  }
});

// 获取数据总数
router.get('/total', async (ctx, next) => {
  try {
    const total = await getLogTotalByCount();
    ctx.body = {
      total,
    };
  } catch (err) {
    ctx.body = err.message;
  }
});

// 删除数据
router.get('/deleteLogs', async (ctx, next) => {
  const request = ctx.request;
  if (request && request.query) {
    try {
      const { ids } = request.query;
      if (ids) {
        await deleteLogs(ids);
      }
      ctx.body = {
        status: 'success',
      };
    } catch (err) {
      ctx.body = err.message;
    }
  }
});

// 根据EventKey删除数据
router.get('/deleteLogsByEventKey', async (ctx, next) => {
  const request = ctx.request;
  if (request && request.query) {
    try {
      const { eventKeys } = request.query;
      let eventKeysStr = '';
      if (typeof eventKeys === 'string') {
        const eventKeysArray = eventKeys.split(',');
        eventKeysArray.forEach((key) => {
          eventKeysStr += `'${key}',`;
        });
      }
      if (eventKeysStr) {
        await deleteLogsByEventKey(eventKeysStr.slice(0, -1));
      }

      ctx.body = {
        status: 'success',
      };
    } catch (err) {
      ctx.body = err.message;
    }
  }
});

// 测试mysql连接
router.get('/testdb', async (ctx) => {
  try {
    const res = await query('SHOW TABLES');
    ctx.body = res;
  } catch (err) {
    ctx.body = err.message;
  }
});

app.use(Cors()); // 允许跨域
app.use(bodyParser());
app.use(Static(path.join(__dirname, 'static'), { extensions: ['html', 'js', 'css'] })); // 渲染静态文件
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT);
console.log(`Server is now listening on port ${PORT}`);
