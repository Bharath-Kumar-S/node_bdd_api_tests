let reporter = require('cucumber-html-reporter');
let fs = require('fs-extra');
var platform = require(`./features/utilities/platform`)
require('dotenv').config()
const { name } = require('./package.json')
const path = require("path");

/**
 * reporter options and metadata
 */

let options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    brandTitle: name,
    metadata: {
        "App Version": process.env.APP_VERSION,
        "Test Environment": process.env.TEST_ENVIRONMENT,
        "Platform": platform(),
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

if (!fs.existsSync('./history')) {
    fs.mkdir('./history');
}

(async () => {

    /**
     * Moving reports to history
     */

    if (fs.existsSync('./report/cucumber_report.html')) {
        const currentPath = path.join(__dirname, "report", "cucumber_report.html");
        const destinationPath = path.join(__dirname, "history", `cucumber_report_${new Date().toISOString().replace(/-/g, "").replace(/:/g, "_")}.html`);
        fs.rename(currentPath, destinationPath, function (err) {
            if (err) {
                throw err
            } else {
                reporter.generate(options);
                console.log("Successfully moved the file!");
            }
        });
    }

})();


