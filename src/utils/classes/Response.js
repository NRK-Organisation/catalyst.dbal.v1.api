class Response {
    constructor(message, data, isSuccess = false, error = null) {
        this.message = message;
        this.data = data;
        this.isSuccess = isSuccess;
        this.error = error;
    }

    returnResponse () {
        return {
            isSuccess: this.isSuccess,
            message: this.message,
            data: this.data,
            error: this.error
        }
    }
}

module.exports = Response;