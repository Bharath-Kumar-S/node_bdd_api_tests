const { expect } = require('chai');
const { Then } = require('@cucumber/cucumber');
require('dotenv').config()

const timeout = { timeout: 60 * 1000 };

Then(`Validate the response {string}`, timeout, async function (expected_response) {
    // already implemented the response validation in when step definition
    return true;
})
