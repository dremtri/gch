import { defineConfig, globalIgnores } from 'eslint/config';
import { base } from '@gch/eslint-config';
import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  ...base,
  prettier,
  // {
  //   extends: ['prettier'], // 关闭 eslint 中 与 prettier 冲突的规则
  // },
  globalIgnores(['**/node_modules', '**/dist/', 'internal/eslint-config/**']),
]);
