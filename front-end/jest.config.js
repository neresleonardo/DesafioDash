module.exports = {
    testPathIgnorePatterns: [
        "/node_modules/",
    ],
    trasform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/test/setupTests.ts"
    ],
    testEnvironment: 'jsdom',
}