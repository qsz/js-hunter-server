import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

const distFile = 'build/out';
const config = {
  input: 'src/index.ts',
  output: [{ file: `${distFile}/app.js`, format: 'umd', name: 'jsHunterServer', sourcemap: false }],
  watch: {
    include: 'src/**',
  },

  plugins: [
    // 拷贝静态资源文件
    copy({
      targets: [{ src: 'src/static/*', dest: `${distFile}/static` }],
    }),
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve(),
  ],
};

export default config;
