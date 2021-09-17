class PurgoMalumSchema {
    constructor() {
    }

    /**
   * jsonSchema for success case
   */
    jsonSchema() {
        return {
            type: "object",
            properties: {
                result: { type: "string" }
            },
            required: ["result"],
            additionalProperties: false
        }
    }

    /**
    * jsonSchema for negative case
    */
    jsonErrorSchema() {
        return {
            type: "object",
            properties: {
                error: { type: "string" }
            },
            required: ["error"],
            additionalProperties: false
        }
    }

    
    /**
   * xml for success case
   */
    xmlSchema(text) {
        return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><PurgoMalum xmlns="http://www.purgomalum.com"><result>${text}</result></PurgoMalum>`
    }

    /**
    * xml for negative case
    */
    xmlErrorSchema(text) {
        return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><PurgoMalum xmlns="http://www.purgomalum.com"><error>${text}</error></PurgoMalum>`
    }

}

module.exports = { PurgoMalumSchema : new PurgoMalumSchema() };