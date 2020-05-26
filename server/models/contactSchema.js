const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    emailAddress: String,
    subject: String,
    content: String
}, {collection: 'contact'});

module.exports = mongoose.model('contact', contactSchema);
