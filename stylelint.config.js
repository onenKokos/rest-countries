module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'at-rule-no-unknown': null,

    // stylelint config standard recommended customs
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    // PRETTIER 'selector-attribute-quotes': 'always',
    // PRETTIER 'string-quotes': 'single',

    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 4,
    'selector-max-specificity': '0,4,1',

    'color-named': 'never',
    'color-no-hex': true,
    'declaration-no-important': true,

    // Maybe:
    // selector-max-class
    // selector-max-attribute
    // selector-max-combinators
    // selector-max-pseudo-class

    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'font-weight-notation': 'numeric',
    'function-url-no-scheme-relative': true,
  },
};
