import { defineBuildConfig } from 'unbuild';
import { resolve } from 'node:path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default defineBuildConfig({
  clean: true,
  entries: ['src/index'],
  declaration: true,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
    alias: {
      entries: [
        {
          find: '@',
          replacement: pathResolve('src'), // 使用绝对路径
        },
      ],
    },
  },
});
