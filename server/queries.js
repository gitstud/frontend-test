const createListingQuery = ({
  category = "italian, seafood, steak, japanese, tradamerican, mexican, thai",
  offset = 0,
  openNow = false,
  price = "1, 2, 3, 4"
}) => {
  return `{
        search(
            location: "las vegas",
            offset: ${offset},
            price: "${price}",
            categories: "${category}",
            open_now: ${openNow}
        ) {
            total
            business {
                id
                name
                price
                rating
                photos
                location {
                    formatted_address
                }
                coordinates {
                    longitude
                    latitude
                }
                reviews {
                    id
                    text
                    rating
                    time_created
                    user {
                        name
                        image_url
                    }
                }
                categories {
                    title
                }
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
};

module.exports = createListingQuery;
