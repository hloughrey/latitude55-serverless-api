module.exports = {
  globalSetup: './jest.global-setup.js',
  setupFiles: ['dotenv/config'],
  coveragePathIgnorePatterns: ['src/mock', '<rootDir>/node_modules'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  moduleNameMapper: {
    '@functions/*': '<rootDir>src/functions/*',
    '@libs': '<rootDir>src/libs'
  },
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  }
};
