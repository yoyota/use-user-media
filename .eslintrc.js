module.exports = {
  extends: [
    "airbnb",
    "prettier/react",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  plugins: ["jest", "promise", "prettier", "react", "react-hooks", "markdown"],
  rules: {
    "no-alert": "error",
    "no-console": "error",
    "no-param-reassign": ["error", { props: false }],
    "no-use-before-define": "off",
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "_"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false
      }
    ],
    "react/jsx-sort-props": "warn",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-extraneous-dependencies": "off"
  },
  overrides: [{
    "files": ["*.md"],
    "rules": {
      "react/jsx-no-undef": "off",
      "import/no-unresolved": "off",
      "no-unused-expressions": "off",
      "react/react-in-jsx-scope": "off"
    }
  }],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"]
      }
    }
  }
}