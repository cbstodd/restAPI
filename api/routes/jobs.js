const express = require('express');
const Helpers = require("./api/helpers/idGenerator");
const router = express.Router();
const idLength = 22;

// Get Homepage:
router.get('/', (
        res,
        nextError) => {
        if (res.status(200)) {
            res.status(200).router('/');
        } else {
            console.error(`cbsError1: not responding with a '200'. Instead its responding with: ${nextError.error}`);
            alert(`cbsError1: The route '/' is not responding with a '200' response See console for more details`);
        }
    }
);

// Job Router:
router.get('/jobs', (
        res,
        nextError) => {

        const uid = new Helpers();
        const newUID = uid.generateId(idLength).toString();

        if (res.status(200)) {
            res.status(200).json({
                "message": "Jobs",
                jobId: newUID
            });
        } else {
            console.error(`cbsError1: not responding with a '200'. Instead its responding with: ${nextError.error}`);
            alert(`cbsError1: The route '/' is not responding with a '200' response See console for more details`);
        }
    }
);

module.exports = router;
