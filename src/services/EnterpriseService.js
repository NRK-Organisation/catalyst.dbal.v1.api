const ErrorResponse = require("../utils/classes/ErrorResponse");

async function getEnterprise(req, res) {
    try {
        throw new Error('Not implemented');
    } catch (error) {
        var errorResponse = new ErrorResponse(error.message, null, 400, null);
        errorResponse.InternalServerError(); // Internal Server Error
        return res.status(errorResponse.statusCode || 400).json(errorResponse.returnResponse());
    }
}

async function createEnterprise(req, res) {
    try {
        const enterprise = req.body;
        return res.status(201).json(enterprise);
    } catch (error) {
        var errorResponse = new ErrorResponse(error.message, null, 400, null);
        errorResponse.InternalServerError(); // Internal Server Error
        return res.status(errorResponse.statusCode || 400).json(errorResponse.returnResponse());
    }
}

module.exports = {
    getEnterprise,
    createEnterprise
}