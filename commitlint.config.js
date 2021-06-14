module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 72],
    'references-empty': [2, 'never'],
    'type-enum': [2, 'always', ['build', 'ci', 'cr', 'deps', 'docs', 'feat', 'fix', 'refactor', 'style', 'test']],
  },
}
