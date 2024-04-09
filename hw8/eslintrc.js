module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "vue/max-len": ["error", {
      "code": 200,
      "template": 200,
      "tabWidth": 2,
      "comments": 200,
      "ignorePattern": "",
      "ignoreComments": false,
      "ignoreTrailingComments": false,
      "ignoreUrls": false,
      "ignoreStrings": false,
      "ignoreTemplateLiterals": false,
      "ignoreRegExpLiterals": false,
      "ignoreHTMLAttributeValues": false,
      "ignoreHTMLTextContents": false,
    }]
  }
}
