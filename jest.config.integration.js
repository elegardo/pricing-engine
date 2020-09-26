'use strict'

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src/integration-test'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.(ts|js)?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  setupFiles: [
    'jest-date-mock',
    '<rootDir>/src/integration-test/integrationSetup.js',
  ],
}
