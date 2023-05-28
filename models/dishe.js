const { Schema, model } = require("mongoose");
const Joi = require("joi");

const disheSchema = Schema({
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

const restaurantSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for restaurant'],
        unique: true
    },
    dishes: [disheSchema],
}, { versionKey: false, timestamps: false });

const joiSchemaDish = Joi.object({
    name: Joi.string().required(),
    dishes: Joi.array().items({
        dishe_name: Joi.string().required(),
        price: Joi.number().required(),
        restaurant: Joi.string().required(),
        image: Joi.string().default(null)
    })
})

const Dishe = model("dishe", restaurantSchema);

module.exports = {
    disheSchema,
    Dishe,
    joiSchemaDish
}