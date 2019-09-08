module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/setupEnzyme.ts"]
}
