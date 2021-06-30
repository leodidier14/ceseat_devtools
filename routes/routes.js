//Load required elements
const router = require('express').Router()
const express = require('express')

const {getMultipleConnectionLogsController} = require('../controllers/logsController')
const {postComponentsLogsController,getMultipleComponentsLogsController} = require('../controllers/logsController')
const {postComponentsController,getComponentsController,deleteComponentsController} = require('../controllers/componentsController')

//Use json parser
router.use(express.json());

//Load tokenapp controller
const {verifTokenAppController} = require('../controllers/tokenAppController')

router.get('/available', function(req, res) {
    console.log('ask for availableity')
    res.send(true)
});
//Connection Logs
router.get('/logs/connection', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    getMultipleConnectionLogsController(req, res)
});

//Components Logs
router.post('/logs/components/logs', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")
    postComponentsLogsController(req, res)
});
router.get('/logs/components/', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    getMultipleComponentsLogsController(req, res)
});

//Components
router.post('/components', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")
    postComponentsController(req, res)
});
router.get('/components/', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")
    getComponentsController(req, res)
});
router.delete('/components/:id', async function(req, res){
    console.log(req.params.id)
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    deleteComponentsController(req, res)
});



module.exports = router;