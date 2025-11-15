import nextPlugin from '@next/eslint-plugin-next'

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    ignores: ['next-env.d.ts', '.next/**', 'node_modules/**', 'out/**', 'build/**', 'dist/**'],
  },
  nextPlugin.configs['core-web-vitals'],
]

export default eslintConfig
