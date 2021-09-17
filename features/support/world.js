const { setWorldConstructor, Before, After, Status, setDefaultTimeout } = require("@cucumber/cucumber")
setDefaultTimeout(30 * 1000)
require('dotenv').config()

function CustomWorld({ attach, log, parameters }) {
    this.attach = attach
    this.log = log
    this.parameters = parameters
}
let resp;

Before(async function (testCase) {
    // console.log(testCase.gherkinDocument.feature.description)
});

After(function (testCase) {
    // console.log(testCase.result.status)
});

setWorldConstructor(CustomWorld)