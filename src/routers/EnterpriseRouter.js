const _enterpriseService = require("../services/EnterpriseService");
const route = require('../utils/decorators/route');
const BaseRouter = require("./BaseRouter");
const { GET } = require('../utils/texts/methods');

class EnterpriseRouter extends BaseRouter {
    constructor() {
        super();
    }

    @route(GET, '/enterprise')
    async getEnterprise(req, res) {
        try {
            await _enterpriseService.getEnterprise(req, res);
        } catch (error) {
            var error = new ErrorResponse(error.message);
            return res.status(error.statusCode || 400).json(error);
        }
    }

    @route('post', '/enterprise')
    async createEnterprise(req, res) {
        try {
            await _enterpriseService.createEnterprise(req, res);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = EnterpriseRouter;