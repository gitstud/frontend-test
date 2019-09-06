const createListingQuery = ({
  category = "",
  offset = 0,
  openNow = false,
  price = "1, 2, 3, 4"
}) => {
  return `{
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
};

module.exports = createListingQuery;
