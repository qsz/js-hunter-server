import Mysql from 'promise-mysql';

export interface eventData {
  eventKey?: string; // 用于过滤相同的数据
  type?: string; // 上报类型
  originType?: string; // 原生事件类型类型 Event.type
  message?: string; // 异常信息文字描述
  timestamp?: number; // 该eventKey第一次上报时间戳
  start_timestamp?: number; // 异常开始时间戳
  pageUrl?: string; // 页面地址
  userAgent?: string; // 浏览器信息
  level?: string; // 上报级别
  request?: {
    // 请求数据
    method?: string;
    url?: string;
    body?: any;
  };
  response?: {
    // 响应数据
    message?: string;
    status?: number;
  };
  customInfo?: string; // 用户自定义的信息
}

// 建立连接池
const connectPool = Mysql.createPool({
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'js_hunter_docker',
});

/**
 * sql查询
 * @param sql
 * @param values
 */
export async function query(sql: string, values: any = ''): Promise<any> {
  const pool = await connectPool;
  const connection = await pool.getConnection();
  const result = await connection.query(sql, values);
  connection.release(); // 连接完成后，释放
  return await result;
}

/**
 * 创建log表
 * deleteTable('log_info');
 * createTable();
 */
export async function createTable(): Promise<any> {
  const sql = `CREATE TABLE IF NOT EXISTS log_info (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    eventKey VARCHAR ( 50 ) COMMENT '用于过滤相同的数据',
    type VARCHAR ( 30 ) COMMENT '上报类型',
    message VARCHAR ( 1000 ) COMMENT '异常信息文字描述',
    timestamp BIGINT ( 13 ) COMMENT 'eventKey第一次上报时间戳',
    updateTime BIGINT ( 13 ) COMMENT '更新时间',
    level VARCHAR ( 20 ) COMMENT '上报级别',
    pageUrl VARCHAR ( 1000 ) COMMENT '页面地址',
    userAgent VARCHAR ( 500 ) COMMENT '浏览器信息',
    request VARCHAR ( 1000 ) COMMENT '请求数据',
    response VARCHAR ( 1000 ) COMMENT '响应数据',
    originType VARCHAR ( 20 ) COMMENT '原生事件类型类型',
    customInfo VARCHAR ( 1000 ) COMMENT '用户自定义的信息',
    count INT ( 10 ) COMMENT '错误出现次数'
  ) ENGINE = INNODB charset = utf8;`;
  return await query(sql);
}

/**
 * 创建每天上报错误记录表
 * deleteTable('log_day');
 * createDayTable();
 */
export async function createDayTable(): Promise<any> {
  const sql = `CREATE TABLE IF NOT EXISTS log_day (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    eventKey VARCHAR ( 50 ) COMMENT '用于过滤相同的数据',
    type VARCHAR ( 30 ) COMMENT '上报类型',
    timestamp BIGINT ( 13 ) COMMENT 'eventKey第一次上报时间戳'
  ) ENGINE = INNODB charset = utf8;`;
  return await query(sql);
}

/**
 * 添加字段
 * @param sql
 * addTableColumn(`eventKey VARCHAR ( 100 ) COMMENT '用于过滤相同的数据' AFTER type`);
 */
export async function addTableColumn(sql: string): Promise<any> {
  const querySql = `alter table log_info Add column ${sql};`;
  return await query(querySql);
}

/**
 * 修改字段
 * @param sql
 * updateTableColumn(`userAgent userAgent VARCHAR ( 500 ) COMMENT '浏览器信息'`);
 */
export async function updateTableColumn(sql: string): Promise<any> {
  const querySql = `alter table log_info change ${sql};`;
  return await query(querySql);
}

/**
 * 删除七天前的数据
 * @param table
 */
async function deleteLogTimeBeforeAdd(table): Promise<any> {
  const sql = `
  delete from ${table}
  where
    date(convert_tz(from_unixtime(timestamp / 1000),'SYSTEM','+08:00'))
    <=
    date_sub(convert_tz(CURDATE(),'SYSTEM','+08:00'), INTERVAL 8 DAY)
  `;
  return await query(sql);
}

/**
 * 总共存储 10w 条数据
 * @param table
 */
async function checkLogTotalLimitBeforeAdd(table): Promise<any> {
  const sql = `select count(*) as num from ${table}`;
  const count = await query(sql);
  const total = (count && count[0] && count[0].num) || 0;
  if (total > 100000) {
    // 总共存储10w条数据
    return true;
  }
  return false;
}

/**
 * 记录每天上报的数量
 * @param timestamp
 * 只保存七天内的数据
 */
async function addDayLog(eventKey, type, timestamp): Promise<any> {
  // 删除过期数据
  await deleteLogTimeBeforeAdd('log_day');

  // 总共存储 10w 条数据
  if (await checkLogTotalLimitBeforeAdd('log_day')) {
    return;
  }

  // 相同eventKey的log数量最多保存200条
  const l_sql = `select * from log_day where eventKey='${eventKey}'`; // 找到相同eventKey的log
  const logs = await query(l_sql);
  if (logs.length > 200) {
    return;
  }

  const a_sql = `insert into log_day(eventKey,type,timestamp) values(?,?,?)`;
  return await query(a_sql, [eventKey, type, timestamp]);
}

/**
 * 添加一条数据
 * @param data
 * TODO 更新时间
 */
export async function addLog(data: eventData): Promise<any> {
  const {
    eventKey,
    type,
    message,
    timestamp = new Date().getTime(),
    level,
    pageUrl,
    userAgent,
    request,
    response,
    originType,
    customInfo,
  } = data;

  // 删除过期数据
  await deleteLogTimeBeforeAdd('log_info');

  // 总共存储 10w 条数据
  if (await checkLogTotalLimitBeforeAdd('log_info')) {
    return;
  }

  // 记录每天上报错误数量
  await addDayLog(eventKey, type, timestamp);

  const k_sql = `select * from log_info where eventKey='${eventKey}'`; // 找到相同的eventKey
  const logs = await query(k_sql);
  const hasLog = logs && logs[0]; // 是否已存在

  if (hasLog) {
    // 更新count和updateTime
    let count = logs[0].count || 0;
    count += 1;
    const update_sql = `update log_info set count=${count}, updateTime=${timestamp} where eventKey='${eventKey}'`;
    return await query(update_sql);
  } else {
    // 新增
    const add_sql = `insert into 
      log_info(eventKey,type,message,timestamp,updateTime,level,pageUrl,userAgent,request,response,originType,customInfo, count) 
      values(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const count = 1;
    const values = [
      eventKey,
      type,
      message,
      timestamp,
      timestamp,
      level,
      pageUrl,
      userAgent,
      request,
      response,
      originType,
      customInfo,
      count,
    ];
    return await query(add_sql, values);
  }
}

/**
 * 获取数据
 * @param pageNo
 * @param pageSize
 */
export async function getLogs({ pageNo, pageSize }: { pageNo: any; pageSize: any }): Promise<any> {
  const pageN = +pageNo;
  const pageS = +pageSize;
  const pageLimit = `${(pageN - 1) * pageS},${pageN * pageS}`; // 分页查询
  const sql = `select * from log_info order by updateTime desc limit ${pageLimit};`;
  const logs = await query(sql);
  return await logs;
}

/**
 * 获取数据总数, 累加count
 */
export async function getLogTotalByCount(): Promise<any> {
  const sql = 'select sum(count) as num from log_info';
  const count = await query(sql);
  const total = (count && count[0] && count[0].num) || 0;
  return await total;
}

/**
 * 获取数据总条数
 */
export async function getLogTotal(): Promise<any> {
  const sql = 'select count(*) as num from log_info';
  const count = await query(sql);
  const total = (count && count[0] && count[0].num) || 0;
  return await total;
}

/**
 * 按天统计数据
 * 带时区 东八区
 * @param pageNo
 * date_sub() 函数从日期减去指定的时间间隔。
 * TODO 补齐
 */
export async function getLogsGroupByDay(type?: any): Promise<any> {
  let days = 7;
  let sql = `
    select from_unixtime(timestamp / 1000) as unixtime, count(*) as num
    from log_day
    where 
      date_sub(convert_tz(CURDATE(),'SYSTEM','+08:00'), INTERVAL ${days} DAY) 
      <= 
      date(convert_tz(from_unixtime(timestamp / 1000),'SYSTEM','+08:00'))
    group by date(convert_tz(unixtime,'SYSTEM','+08:00'))
  `;

  if (type === 'day') {
    days = 1;
    sql = `
    select date_format(convert_tz(from_unixtime(timestamp / 1000),'SYSTEM','+08:00'),'%Y-%m-%d %H') as hours,count(id) as num
    from log_day
    where 
      date_sub(convert_tz(CURDATE(),'SYSTEM','+08:00'), INTERVAL ${days} DAY) 
      <= 
      date(convert_tz(from_unixtime(timestamp / 1000),'SYSTEM','+08:00'))
    group by hours;`;
  }

  return await query(sql);
}

/**
 * 按错误类型分组统计数据
 */
export async function getLogsGroupByType(): Promise<any> {
  // const sql = `select count(*),type from log_info group by type`;
  const sql = `select type,sum(count) as num from log_info group by type`;
  return await query(sql);
}

/**
 * 删除一条数据
 * @param id
 */
export async function deleteLog(id: any): Promise<any> {
  const sql = `delete from log_info where id=${id}`;
  return await query(sql);
}

/**
 * 删除多条数据
 * @param ids
 */
export async function deleteLogs(ids: any): Promise<any> {
  const sql = `delete from log_info where id in (${ids})`;
  return await query(sql);
}

/**
 * 删除deleteLogByEventKey相同的数据
 * @param field
 * @param value
 */
export async function deleteLogsByEventKey(eventKeys: any): Promise<any> {
  const sql = `delete from log_info where eventKey in (${eventKeys})`; // 多条
  return await query(sql);
}

/**
 * 删除表
 * @param tableName
 */
export async function deleteTable(tableName: string): Promise<any> {
  const sql = `drop table ${tableName}`;
  return await query(sql);
}
