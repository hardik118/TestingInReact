export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  collectCoverageFrom: [
    "src/component/**/*.{ts,tsx}",
    "!src/component/**/*.{types,stories,constants,test,spec}.{ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  fakeTimers:{
    enableGlobally: true
  }
};
