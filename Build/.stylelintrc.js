module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  customSyntax: 'postcss-scss',
  rules: {
     // if more rules needed, check this site https://stylelint.io/user-guide/rules

      indentation: 'tab', // Use tabs for indentation
      'alpha-value-notation': null, // Allow any notation for alpha values
      'value-keyword-case': null, // Allow any case for property values (e.g., uppercase, lowercase)
      "indentation": 2,
      'media-feature-name-no-unknown': [
          true,
          {
              ignoreMediaFeatureNames: ['min-width', 'max-width'], // Ignore unknown media feature names except for these
          },
      ],
      'media-query-no-invalid': null, // Allow invalid media queries
      'media-feature-range-notation': null, // Allow any notation for media feature ranges
      'declaration-block-no-duplicate-custom-properties': null, // Allow duplicate custom properties in declaration blocks
      'at-rule-no-unknown': null, // Allow unknown at-rules
      'function-no-unknown': null, // Allow unknown functions
      'no-invalid-double-slash-comments': null, // Allow double-slash comments (//) which are usually used in CSS preprocessing
      'color-function-notation': null, // Allow any notation for color functions
      'declaration-block-no-redundant-longhand-properties': null, // Allow redundant longhand properties in declaration blocks
      'import-notation': null, // Allow any notation for @import rules
      'shorthand-property-no-redundant-values': null, // Allow redundant values in shorthand properties
      'no-empty-source': null, // Allow empty sources (e.g., empty files)
      // Disable the selector-class-pattern rule for kebab-case class names
      'selector-class-pattern': null,
      // Disable the error for selector specificity descending order
      'no-descending-specificity': null,
      // Disable the selector-id-pattern rule for kebab-case ID names
      'selector-id-pattern': null,
  },
  // example for configuring the files to be ignored
  // ignoreFiles: [
  //     'SCSS/basic/_main.scss'
  //   ]
};
