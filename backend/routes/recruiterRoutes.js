const express = require('express');
const router = express.Router();
const {
    registerRecruiter,
    loginRecruiter,
    getRecruiterMe,
} = require('../controllers/recruiterController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerRecruiter);
router.post('/login', loginRecruiter);
router.get('/me', protect, getRecruiterMe);

module.exports = router;
