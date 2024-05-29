const Response = require("./Response");

class SuccessResponse extends Response {
    StatusCode = new StatusCode();
    ServerBasicResponse = new ServerBasicResponse();

    constructor(message, data, statusCode = 200, error = null) {
        super(message, data, true, error, statusCode || 200);
    }

    Ok() {
        this.statusCode = StatusCode.OK;
        this.message = ServerBasicResponse.OK;
    }
}

module.exports = SuccessResponse;