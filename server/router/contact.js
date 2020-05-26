const express = require('express');

const router = express.Router();

const all = '/contact';

const Contact = require('../models/contactSchema');

// Get All Contact Form
router.get(all, (req, res) =>{
    Contact.find({})
        .sort({update_at: -1})
        .then(contacts =>{
            res.json(contacts)
        })
        .catch(err=>{
            console.log(2);
            res.json(err);
        });
});

// Add New Contact Form
router.get(all, (req, res)=>{
    Contact.create(req.body, (err, contact)=>{
        if(err){
            res.json(err);
        }else{
            res.json(contact);
        }
    })
});
