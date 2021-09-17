const { expect } = require('chai').use(require('chai-as-promised'));
const should = require('chai').should();
const { Given } = require('@cucumber/cucumber');
const axios = require('axios').default;
const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const timeout = { timeout: 60 * 1000 };
const conf = require('../../conf.json');
const { jsonSchema } = require('../page-objects/PurgoMalumSchema').PurgoMalumSchema;
const { RestClient } = require('../utilities/Utilities');

Given(`PurgoMalum RESTful web service is up and running`, timeout, async function () {
    let response = await axios.get(`${conf.url}/json?text=this is some test input`, { method: '', body: '' });
    const validate = ajv.compile(jsonSchema())
    const valid = validate(response.data)
    const data = { result: 'this is some test input' };
    !valid && expect.fail(`Schema validation failed ${JSON.stringify(validate.errors)}`)
    expect(response.data).to.deep.equal(data);
});
