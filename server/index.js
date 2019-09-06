const express = require('express');
const path = require('path');
const Axios = require('axios');
const bodyParser = require('body-parser');
const createListingQuery = require("./queries");

const envConfig = require("dotenv").config();

if (envConfig.error) {
  throw envConfig.error;
}

const app = express()

const jsonParser = bodyParser.json();

const port = 9081

let custPath = path.join(__dirname, '../');
app.get('/', (req, res) => res.sendFile(custPath + "/index.html"))

app.post('/maxwell', jsonParser, async (req, res) => {
    const {
        category = "chinese",
        offset = 0,
        openNow = false,
        price = "1, 2, 3, 4",
    } = req.body;

    const query = createListingQuery(req.body);

    try {
        const result = await Axios({
          method: "POST",
          url: "https://api.yelp.com/v3/graphql",
          headers: {
            Authorization: `Bearer ${(process.env.YELP_API_KEY)}`,
            "Content-Type": "application/graphql"
          },
          data: query
        });
        console.log(result.data.data);
        res.status(200).send({ success: true, search: result.data.data.search });
    } catch (err) {
        console.log(err);
        res.status(202).send({ success: false, message: err });
    }
});



app.use('/static', express.static('./dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
