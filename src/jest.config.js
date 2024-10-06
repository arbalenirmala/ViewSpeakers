import "jest-preset-angular/setup-jest";
module.exports = 'test-file-stub';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',  // For Angular projects or browser environments
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform TypeScript files using ts-jest
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Mock CSS files
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',  // Mock image files
  },
};
