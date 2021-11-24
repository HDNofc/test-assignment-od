module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignoreAtRules: ['if', 'else', 'import'],
      },
    ],
    'scss/at-import-partial-extension': 'always',
    'scss/dollar-variable-pattern': null,
    'scss/media-feature-value-dollar-variable': null,
    'scss/dollar-variable-empty-line-before': null,
    'color-function-notation': null,
    'selector-class-pattern': [
      '^[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:_[a-z0-9]+(?:-[a-z0-9]+)*){0,2}$',
      {
        resolveNestedSelectors: true,
      },
    ],
  },
};
