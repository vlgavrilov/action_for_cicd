const {Router} = require('express');
const {deactivate} = require('../../controllers/controlPanel');
const {checkRoleAdminRole} = require('../../guards/adminGuard');
const router = Router();

router.put('/deactivate', checkRoleAdminRole, deactivate);

module.exports = {controlPanelRouter: router};
