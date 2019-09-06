const express = require('express')
const path = require('path')
const Axios = require('axios');
const app = express()
const port = 9081

const YELP_API_KEY = 'iKjzqtCSUNKhDGTKO5eVp43jSZOW5rstarKcFna4g3OiU3owt4hSSsQM7qzaZkr6o-_97yDEMs9der7ovIieC-M_IoKRMNmiY-eEUalSCJaIeYI-NUfcreJPPFTOW3Yx';

let custPath = path.join(__dirname, '../');

app.get('/', (req, res) => res.sendFile(custPath + "/index.html"))

app.get('/maxwell', async (req, res) => {
    const data = `{
    business(id: "garaje-san-francisco") {
        name
        id
        alias
        rating
        url
    }
}`;
    try {
        const result = await Axios({
          method: "POST",
          url: "https://api.yelp.com/v3/graphql",
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
            "Content-Type": "application/graphql"
          },
          data
        });
        console.log(result.data.data);
        res.status(200).send({ success: true, data: result.data.data });
    } catch (err) {
        console.log(err);
        res.status(202).send({ success: false, message: err });
    }
});



app.use('/static', express.static('./dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
