const express = require('express');
const router = express.Router();
const { createOrJoinGroup, getGroupDetails, addMessage } = require('../controllers/group.controller');
const { validateGroupLink } = require('../middlewares/group.middleware');

// Create or join a group
router.post('/', validateGroupLink, createOrJoinGroup);

// Fetch group details
router.get('/:groupLink', getGroupDetails);

// Add a message
router.post('/:groupLink/message', addMessage);

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const { createOrJoinGroup, getGroupDetails, addMessage, uploadFiles } = require('../controllers/group.controller');
// const { validateGroupLink } = require('../middlewares/group.middleware');
// const multer = require('multer');

// // Set up multer
// const upload = multer({ dest: 'uploads/' });

// // Routes
// router.post('/group', createOrJoinGroup);
// router.get('/group/:groupLink', getGroupDetails);
// router.post('/group/:groupLink/message', addMessage);
// router.post('/group/:groupLink/upload', upload.array('files'), groupController.uploadFiles);

// module.exports = router;
