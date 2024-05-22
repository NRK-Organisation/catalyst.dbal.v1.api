const Response = require("./Response");

class SuccessResponse extends Response {
    constructor(message, data) {
        super(message, data, true, null);
    }
}

module.exports = SuccessResponse;