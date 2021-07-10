const { Schema, model } = require('mongoose');

const tareaSchema = new Schema(
    {
        title: String,
        description: String,
        status: { type: Boolean, default: false }
    });

<<<<<<< HEAD:src/models/Carga.js
module.exports = model('charge', tareaSchema);
=======
module.exports = model('task', tareaSchema);
>>>>>>> parent of b0e9004... Update form-data to mongo database, ok.:src/models/index.js
