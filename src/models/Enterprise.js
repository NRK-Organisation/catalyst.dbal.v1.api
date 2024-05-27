const mongoose = require('mongoose');
const AddressSchema = require('./Address');
const Schema = mongoose.Schema;

const EnterpriseSchema = new Schema({
    basic: {
        legalName: {
            type: String,
            required: true
        },
        brandName: {
            type: String,
            required: true
        },
        businessType: {
            type: String,
            required: true
        },
        industry: {
            type: String,
            required: true
        },
        logoURL: {
            type: String,
            required: true
        },
    },
    contact: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: true
        },
        address: AddressSchema
    },
    enterpriseCode: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Enterprise', EnterpriseSchema);