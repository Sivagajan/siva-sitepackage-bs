module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
     // Individual rules can be added or customised here
     // if more rules needed, check this site https://eslint.org/docs/latest/rules
    'indent': ['error', 2], // Example: Use 2 space indentation
    'quotes': ['error', 'single'], // Example: Use single inverted commas
    'semi': ['error', 'always'], // Example: Always use a semicolon at the end
    'no-unused-vars': 'off' // Deactivate no-unused-vars rule for the entire project
  }
};