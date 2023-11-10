const express = require('express')
const{webProtection} = require('../helper/auth')
const { zoomAuthController, zoomRedirectController,zoomRefeshTokenController, zoomCreateMeetingController, zoomGetMeetingById } = require('../controllers/zoom.controller')
const router = express.Router()

// zoom routes for live sessions 
router.get("/zoomauth", zoomAuthController)
router.get("/redirect", zoomRedirectController)
router.post("/refreshtoken", zoomRefeshTokenController)
router.post("/createmeeting", zoomCreateMeetingController)
router.get("/getmeetingbyid/:id", zoomGetMeetingById)

module.exports = router