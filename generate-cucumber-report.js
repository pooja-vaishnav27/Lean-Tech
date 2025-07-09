const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version":"1.0.0",
    "Test Environment": "Local",
    "Browser": "Chromium",
    "Platform": "Windows",
    "Executed": "Local"
  }
};

reporter.generate(options);
