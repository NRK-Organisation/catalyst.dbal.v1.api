const ErrorResponse = require("../utils/classes/ErrorResponse");

async function getEnterprise(req, res) {
    try {
        throw new Error('Not implemented');
    } catch (error) {
        var error = new ErrorResponse(error.message);
        return res.status(error.statusCode || 400).json(error);
    }
}

async function createEnterprise(req, res) {
    try {
        const enterprise = req.body;
        return res.status(201).json(enterprise);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getEnterprise,
    createEnterprise
}