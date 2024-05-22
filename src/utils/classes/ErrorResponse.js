const Response = require("./Response");

class ErrorResponse extends Response {
    constructor(message, data) {
        super(message, data, false, null);
    }
}

module.exports = ErrorResponse;