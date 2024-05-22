const ErrorResponse = require("../utils/classes/ErrorResponse");
const route = require('../utils/decorators/route');
const BaseRouter = require("./BaseRouter");

class EnterpriseRouter extends BaseRouter {
    constructor() {
        super();
    }

    @route('get', '/enterprise')
    async getEnterprise(req, res) {
        try {
            throw new Error('Not implemented');
        } catch (error) {
            var error = new ErrorResponse(error.message);
            return res.status(error.statusCode || 400).json(error);
        }
    }

    // static async createEnterprise(req, res) {
    //     try {
    //         const enterprise = await EnterpriseService.createEnterprise(req.body);
    //         return res.status(201).json(enterprise);
    //     } catch (error) {
    //         return res.status(500).json({ message: error.message });
    //     }
    // }
}

module.exports = EnterpriseRouter;