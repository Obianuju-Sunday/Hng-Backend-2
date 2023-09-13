const express = require('express');
const Model = require('../models/userModel')
const Router = express.Router();
 
// GET BY ID API
Router.get('/:user_id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.user_id) 


        res.json(data)
    } catch (error) {
        res.status(500).json({message: error})
    } 
})

// POST API
Router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email
    })

    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(501).json({message: error.message})
    }
})

// Patch API
Router.patch('/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const dataToUpdate = req.body;
        const options = { new: true}

        const result = await Model.findByIdAndUpdate(
            user_id, dataToUpdate, options
        ) 
        
        res.send({
            message: "User updated successfully!",
            person: dataToUpdate})
    } catch (error) {
        res.status(501).json({message: error.message})
    }
})

// DELETE API
Router.delete('/:user_id', async (req, res) => {
    try {
       await Model.findByIdAndDelete(req.params.user_id)
        res.send(`User with the id ${req.params.user_id} has been Deleted`)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
})

module.exports = Router; 

//  https://lucid.app/lucidchart/4bef2422-3ab9-4f74-86ab-6e8940ab578b/edit?viewport_loc=-2375%2C-1387%2C6675%2C3312%2C0_0&invitationId=inv_869e03d0-1062-48ae-bbe8-8a50e88b2f59