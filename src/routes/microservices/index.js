const {Router} = require('express');
const {ipGuard} = require('../../guards/ipGuard');
const {controlPanelRouter} = require('./controlPanel');

const router = Router();

router.use('/control_panel', ipGuard, controlPanelRouter);

module.exports = {microServiceRouter: router};
