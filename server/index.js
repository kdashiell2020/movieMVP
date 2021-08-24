const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static('client/dist'));

app.get('/search', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})