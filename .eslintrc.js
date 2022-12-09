module.exports = {
  root: true,
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
    }
  ],
  env: {
    es6: true,
    node: true,
  },
};
