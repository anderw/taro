const config = require('../../.eslintrc.js')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'no-console': 0
  },
  settings: {
    react: {
      pragma: 'React'
    }
  }
}
