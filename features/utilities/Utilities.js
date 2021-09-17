const axios = require('axios').default;
const { expect } = require('chai');

class RestClient {
  constructor() {
  }

  /**
 * @param {string=} URL - API endpoint.
 * @param {object=} Options - headers, payload and auth.
 */
  async getRequest(URL, options = {}) {
    let response = await axios.get(URL, options);
    expect(response.status).to.match(/^20[0-2]$/);
    return response;
  }

  /**
* @param {string=} URL - API endpoint.
* @param {object=} Options - headers, payload and auth.
*/
  async postRequest(URL, options = {}) {
    let response = await axios.post(URL, options);
    expect(response.status).to.match(/^20[0-2]$/);
    return response;
  }

  /**
* @param {string=} URL - API endpoint.
* @param {object=} Options - headers, payload and auth.
*/
  async putRequest(URL, options = {}) {
    let response = await axios.put(URL, options);
    expect(response.status).to.match(/^20[0-2]$/);
    return response;
  }

  /**
* @param {string=} URL - API endpoint.
* @param {object=} Options - headers, payload and auth.
*/
  async deleteRequest(URL, options = {}) {
    let response = await axios.delete(URL, options);
    expect(response.status).to.match(/^20[0-2]$/);
    return response;
  }

}

class Assert {
  constructor() {
  }

  /**
 * @param {string=} URL - API endpoint.
 * @param {object=} Options - headers, payload and auth.
 */
  async getRequest(URL, options = {}) {
    let response = await axios.get(URL, options);
    expect(response.status).to.match(/^20[0-2]$/);
    return response;
  }

}

module.exports = { RestClient: new RestClient() };