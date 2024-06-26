module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['prefer-arrow'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules/', 'dist/', 'build/', '.yarn/'],
  rules: {
    'import/no-unresolved': 'off',
    'no-await-in-loop': 'off',
    'no-implicit-coercion': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/triple-slash-reference': 'off',
    curly: ['error', 'all'],
    'object-shorthand': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-object-spread': 'warn',
    'newline-before-return': 'warn',
    'no-else-return': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-mixed-operators': 'warn',
    'no-magic-numbers': 'warn',
    'require-await': 'warn',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
}
