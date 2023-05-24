const {UserCredential} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const userCreds = await UserCredential.create(req.body)
            res.send(userCreds.toJSON())
        } catch (err) {
            res.status(400).send({
                error: err.message
            })
        }
    },
    async login (req, res) {
        try {
            console.log(req)
            const user = await UserCredential.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })

            if (user === null) {
                res.status(404).send({
                    message: 'No matching email and/or password'
                })
            } else {
                res.status(200).send({
                    message: 'Successfully logged in!'
                });
            }

        }
        catch (err) {
            throw err
        }
    }
}
