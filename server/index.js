const express = require('express');
const path = require('path');
const Axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const createListingQuery = require("./queries");

let custPath = path.join(__dirname, "../");
if (process.env.NODE_ENV !== 'production') {
  const envConfig = require("dotenv").config({ path: custPath + "/.env" });

  if (envConfig.error) {
    throw envConfig.error;
  }
}

const app = express()

app.use(cors());

const jsonParser = bodyParser.json();

const port = 9081
app.get('/*', (req, res, next) => {
  console.log(req.url);
  if (req.url === '/listings' || req.url.includes('static')) {
    return next();
  }
  return res.sendFile(custPath + "/index.html");
});

app.post('/listings', jsonParser, async (req, res) => {
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
        res.status(200).send({ success: true, search: result.data.data.search });
    } catch (err) {
        console.log(err);
        res.status(202).send({ success: false, message: err });
    }
});



app.use('/static', express.static('./dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
