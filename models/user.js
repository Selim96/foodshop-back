const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { disheSchema } = require("./dishe");

const statusValue = ["finished", "inprocess", "rejected"];

const disheSchema = Schema({
    _id: {
            type: String,
            required: true
        },
    dishe_name: {
            type: String,
            required: true
        },
    price: {
            type: Number,
            required: true
        },
    restaurant: {
            type: String,
            required: true
        },
    image: {
            type: String,
            default: null
        }
}, { versionKey: false, timestamps: false })

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [...statusValue],
        default: "inprocess"
    },
    food: {
        type: [disheSchema],
        required: true
    }
}, { versionKey: false, timestamps: true })


const joiSchemaUser = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
    adress: Joi.string().required(),
    status: Joi.string().valid(...statusValue),
    food: Joi.array().items({
        _id: Joi.string().required(),
        dishe_name: Joi.string().required(),
        price: Joi.number().required(),
        restaurant: Joi.string().required(),
        image: Joi.string().default(null)
    })
});

const Order = model("order", userSchema);

module.exports = {
    Order,
    joiSchemaUser
};