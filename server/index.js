const express = require('express');
const path = require('path');
const Axios = require('axios');
const bodyParser = require('body-parser');

const app = express()

const jsonParser = bodyParser.json();

const port = 9081
const YELP_API_KEY = 'iKjzqtCSUNKhDGTKO5eVp43jSZOW5rstarKcFna4g3OiU3owt4hSSsQM7qzaZkr6o-_97yDEMs9der7ovIieC-M_IoKRMNmiY-eEUalSCJaIeYI-NUfcreJPPFTOW3Yx';

let custPath = path.join(__dirname, '../');
app.get('/', (req, res) => res.sendFile(custPath + "/index.html"))

app.get('/maxwell', jsonParser, async (req, res) => {
    const {
        category = "chinese",
        offset = 0,
        openNow = false,
        price = "1, 2, 3, 4",
    } = req.body;

    // openNow: ${openNow},
    //     offset: ${offset}
    //     price: "${price},"
    //     category: "${category}"

    const data = `{
    search(
        location: "las vegas",
        offset: ${offset},
        price: "${price}",
        categories: "${category}"
    ) {
        total
        business {
            id
            name
            id
            alias
            rating
            url
            hours {
                is_open_now
            }
            rating
            review_count
            location {
                address1
                city
                state
                country
            }
        }
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
