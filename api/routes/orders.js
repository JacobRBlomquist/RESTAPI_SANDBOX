const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "orders were fetched"
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "order poseted"
    })
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "Order details: ",
        orderID: req.params.orderID
    })
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "Order deleted",
        orderID: req.params.orderID
    })
});


module.exports = router;