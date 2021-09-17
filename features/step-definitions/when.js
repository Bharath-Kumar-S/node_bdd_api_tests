const { expect, assert } = require('chai').use(require('chai-as-promised'));
const { When } = require('@cucumber/cucumber');
const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const timeout = { timeout: 60 * 1000 };
const { jsonErrorSchema, jsonSchema, xmlSchema, xmlErrorSchema } = require('../page-objects/PurgoMalumSchema').PurgoMalumSchema;
const { RestClient } = require('../utilities/Utilities');
const conf = require('../../conf.json');

When('validating RESTful web service for {string} response by replacing {string} with {string} using {string} in text {string} and expect {string}', timeout, async function (type, add, fill_text, replace_type, text, response_data) {
    let response = await RestClient.getRequest(`${conf.url}/${type}?text=${text}&add=${add}&${replace_type}=${fill_text}`)
     let schema_type = fill_text.length <= 20;
    if (type === 'json') {
        let validate = ajv.compile(schema_type ? jsonSchema() : jsonErrorSchema())
        let valid = validate(response.data)
        let data = {};
        schema_type ? data.result = response_data : data.error = response_data;
        !valid && expect.fail(`Schema validation failed ${JSON.stringify(validate.errors)}`)
        expect(response.data).to.deep.equal(data);
    }
    if (type === 'plain') {
        assert.isNotObject(response.data)
        expect(response.data).to.equal(response_data)
    }
    if (type === 'xml') {
        expect(response.data).to.equal(schema_type ? xmlSchema(response_data) : xmlErrorSchema(response_data))
    }
});

