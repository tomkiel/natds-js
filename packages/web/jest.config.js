// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("../../jest.config.base.js");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {displayName, name} = require("./package.json");

const styleFiles = "\\.(css|sass)$";
const webResources = "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$";

module.exports = {
  ...base,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.story.tsx"],
  displayName,
  globalSetup: "./global-setup.js",
  moduleNameMapper: {
    [styleFiles]: "<rootDir>/config/test/styleMock.js",
    [webResources]: "<rootDir>/config/test/fileMock.js",
  },
  name,
  setupFilesAfterEnv: [
    "<rootDir>/config/test/setupEnzyme.ts", "<rootDir>/config/test/setupChai.ts",
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["<rootDir>/src/**/*.{spec,test}.tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
