//Load required elements
const router = require('express').Router()
const express = require('express')

const {getMultipleConnectionLogsController} = require('../controllers/logsController')
const {postComponentsLogsController,getMultipleComponentsLogsController} = require('../controllers/logsController')
const {postComponentsController,getComponentsController,deleteComponentsController} = require('../controllers/componentsController')

//Use json parser
router.use(express.json());

//Check if API is available
router.get('/available', function(req, res) {
    res.send(true)
});

//Connection Logs
router.get('/logs/connection', async function(req, res){
    getMultipleConnectionLogsController(req, res)
});

//Components Logs
router.post('/logs/components/', async function(req, res){
    postComponentsLogsController(req, res)
});
router.get('/logs/components/', async function(req, res){
    getMultipleComponentsLogsController(req, res)
});

//Components
router.post('/components', async function(req, res){
    postComponentsController(req, res)
});
router.get('/components/', async function(req, res){
    getComponentsController(req, res)
});
router.delete('/components/:id', async function(req, res){
    deleteComponentsController(req, res)
});

module.exports = router;