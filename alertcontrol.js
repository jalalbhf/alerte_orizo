const Alert = require('../models/Alert');

exports.getAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find();
        res.json(alerts);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createAlert = async (req, res) => {
    try {
        const newAlert = new Alert(req.body);
        const alert = await newAlert.save();
        res.json(alert);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
