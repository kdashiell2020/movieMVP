const User = require('../models/user');
// console.log(User)
module.exports = {
    getAll(req, res) {
        res.send('xXXXXx')

    },

    create(req, res) {
        res.send(req.body.name)

    },

    search(req, res) {
        res.send(req.params)

    }

}