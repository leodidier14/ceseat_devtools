//Load required elements
const router = require('express').Router()
const express = require('express')

const {postConnectionLogsController,getSingleConnectionLogsController,getMultipleConnectionLogsController,deleteConnectionLogsController} = require('../controllers/logsController')
const {postComponentsLogsController,getSingleComponentsLogsController,getMultipleComponentsLogsController,deleteComponentsLogsController} = require('../controllers/logsController')

//Use json parser
router.use(express.json());

//Load tokenapp controller
const {verifTokenAppController} = require('../controllers/tokenAppController')

//Connection Logs
router.post('/connection/logs', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    postConnectionLogsController(req, res)
});
router.get('/connection/logs/:id', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    getSingleConnectionLogsController(req, res)
});
router.get('/connection/logs', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    getMultipleConnectionLogsController(req, res)
});
router.delete('/connection/logs/:id', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    deleteConnectionLogsController(req, res)
});

//Components Logs
router.post('/components/logs', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    postComponentsLogsController(req, res)
});
router.get('/components/logs/:id', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    getSingleComponentsLogsController(req, res)
});
router.get('/components/logs', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    getMultipleComponentsLogsController(req, res)
});
router.delete('/components/logs/:id', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    deleteComponentsLogsController(req, res)
});



module.exports = router;