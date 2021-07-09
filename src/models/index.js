const { Schema, model } = require('mongoose');

const tareaSchema = new Schema(
    {
        title: String,
        description: String,
        status: { type: Boolean, default: false }
    });

module.exports = model('task', tareaSchema);
