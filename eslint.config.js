import eslintJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  {
    settings: { react: { version: '18.0' } },
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist'],
  },
]
