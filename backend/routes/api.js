//dependencies
const express = require('express');
const router = express.Router();
const fs = require('fs');

//Routes
router.get('/monitor-types', (req, res) => {
    fs.readFile('./Legends.json', (err, data) => {
        
        if (err) {
            throw err;
        }
        const mt = JSON.parse(data);
        res.send(mt.MonitorType);
    });
})
router.get('/monitor', (req, res) => {
    fs.readFile('./Legends.json', (err, data) => {
        
        if (err) {
            throw err;
        }
        const m = JSON.parse(data);
        res.send(m.Monitor);
    });
})
router.get('/legend', (req, res) => {
    fs.readFile('./Legends.json', (err, data) => {
        
        if (err) {
            throw err;
        }
        const l = JSON.parse(data);
        res.send(l.Legends);
    });
})

module.exports = router;