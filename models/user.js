const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { disheSchema } = require("./dishe");

const statusValue = ["finished", "inprocess", "rejected"]

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
        dishe_name: Joi.string().required(),
        price: Joi.number().required(),
        restaurant: Joi.string().required(),
        image: Joi.string().default(null)
    })
});

const User = model("order", userSchema);

module.exports = {
    User,
    joiSchemaUser
};