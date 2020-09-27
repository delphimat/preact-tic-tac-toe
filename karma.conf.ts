// Karma configuration

module.exports = config => {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
    frameworks: ["mocha", "parcel"],
    files: [
      {
        pattern: "./src/**/*-test.ts",
        watched: false,
        included: false,
        served: false
      },
      {
        pattern: "./src/**/*-test.tsx",
        watched: false,
        included: false,
        served: false
      }
    ],
    exclude: [],
    captureTimeout: 5 * 60 * 1000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 7 * 1000,
    browserNoActivityTimeout: 60 * 1000,
    preprocessors: {
      "**/*-test.ts": ["parcel"],
      "**/*-test.tsx": ["parcel"]
    },
    reporters: ["dots"],
    mochaReporter: {
      output: "minimal",
      showDiff: true,
      printFirstSuccess: true
    },
    summaryReporter: {
      show: "all",
      specLength: 100,
      overviewColumn: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    autoWatchBatchDelay: 500,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    concurrency: Infinity,
    plugins: [
      require("karma-chrome-launcher"),
      require("karma-mocha"),
      require("karma-parcel"),
      require("karma-mocha-reporter")
    ]
  });
};
