module.exports = (req, res)=>res.status(404).send({error: `Endpoint not found ${req.originalUrl}`});