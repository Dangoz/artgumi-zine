const path = require('path')

const prettier = 'prettier --write --ignore-unknown'

const eslint = 'eslint --cache --fix'

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [prettier,
    // eslint
  ],
}