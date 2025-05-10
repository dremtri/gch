import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import gitignore from '@/configs/gitignore';
import bestPractices from '@/configs/best-practices';
import possibleErrors from '@/configs/possible-errors';
import stylisticPlugin from '@stylistic/eslint-plugin';
import stylistic from '@/configs/stylistic';
import es6 from '@/configs/es6';
import variables from '@/configs/variables';
import typescript from '@/configs/typescript';
import vue from '@/configs/vue';

export default defineConfig([
  gitignore,
  js.configs.recommended,
  bestPractices,
  possibleErrors,
  stylisticPlugin.configs['disable-legacy'],
  stylistic,
  es6,
  variables,
  typescript,
  vue,
]);
