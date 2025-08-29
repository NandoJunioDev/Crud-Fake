
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },



  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
)

module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true, // Habilita o reconhecimento de macros como defineProps
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended', // Regras recomendadas para TS
  ],
  // O parser principal para analisar arquivos .vue
  parser: 'vue-eslint-parser',

  parserOptions: {
    // O parser que será usado para o código DENTRO da tag <script>
    // ESTA LINHA É A CHAVE DA SOLUÇÃO!
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest', // Permite usar as features mais recentes do JS
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    // Aqui você pode adicionar ou sobrescrever regras
    'no-unused-vars': 'warn',
  },
};
