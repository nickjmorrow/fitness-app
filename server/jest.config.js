module.exports = {
    preset: 'ts-jest',
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: ['/node_modules/'],
};
