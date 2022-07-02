module.exports = {
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'lf',
  trailingComma: 'all',
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false,
        tabWidth: 4,
      },
    },
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
