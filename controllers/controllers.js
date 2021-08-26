const { sequelize, User } = require('../models');
const axios = require('axios');
const headers = { headers: {
    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    'x-rapidapi-key': 'e14ae5c7e6mshd205887fae5cbc8p1eb315jsn6893e96b9c1f'
}};

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}
connect();

module.exports = {

    async getAll(req, res) {
          try {
            const cocktails = await axios.get('https://the-cocktail-db.p.rapidapi.com/latest.php', headers);
            // console.log('user ',cocktails)
            res.json({ data: JSON.parse(JSON.stringify(cocktails.data)) });
        } catch(err) {
            console.error(err);
        }
    },

    async create(req, res) {
        const { email, password  } = req.body;
        try {
            const user = await User.create({ email, password });
            console.log('user ',user)
            res.json(user);
        } catch(err) {
            console.error(err);
        }
    },

    async search(req, res) {

        res.send(req.params)

    }

}