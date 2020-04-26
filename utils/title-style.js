const remarkCapitalize = require('remark-capitalize');

const excludedWords = [
  'API',
  'APIs',
  'CSS',
  'GraphQL',
  'MDX',
  'IDE',
  'SWR',
  'UI',
  'USB',
  'UX',
  'VSCode'
];

module.exports = remarkCapitalize({
  special: excludedWords
});
