import * as React from "react";
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import BrandedText from "../components/BrandedText";
import { makeStars, formatDate } from "../utilities";

const MyMapComponent = withScriptjs(withGoogleMap(({ coords }) =>
  <GoogleMap
    defaultZoom={15}
  defaultCenter={coords}
  >
    <Marker position={coords} />
  </GoogleMap>
));

const Listing = ({
  listing,
  listing: {
    coordinates: { longitude: lng, latitude: lat }
  }
}) => (
  <div className="listing_container">
    <BrandedText type="h1">{listing.name}</BrandedText>
    <span className="star_rating">{makeStars(listing.rating)}</span>
    <div className="listing_isOpen-container">
      <span className="listing_price">
        {`${listing.categories[0].title} • ${listing.price}`}
      </span>
      <div className="listing_hours">
        <div
          className="dot"
          style={{
            backgroundColor: listing.hours[0].is_open_now
              ? "#00E8A4"
              : "#FF3548"
          }}
        ></div>
        <span className="listing_price">
          {listing.hours[0].is_open_now ? "OPEN NOW" : "CLOSED"}
        </span>
      </div>
    </div>
    <div className="map_section">
      <div className="map_container">
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCRHzhtZdje4hNi1HqFtB_s92JKZz0CP48"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `200px`, width: "600px" }} />}
          mapElement={<div style={{ height: `200px`, width: "600px" }} />}
          coords={{ lng, lat }}
        />
        <div
          className="listing_image-container"
          style={{
            backgroundImage: `url(${listing.photos[0]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "200px",
            width: "100%"
          }}
        ></div>
      </div>
      <div className="listing_address">
        <span>{listing.location.formatted_address}</span>
      </div>
    </div>
    <div className="review_count">
      <span className="listing_price">{`${listing.review_count} Reviews`}</span>
    </div>
    <div className="reviews_container">
      {listing.reviews.map(review => (
        <div className="review_container" key={review.id}>
          <div className="review_userdetails">
            <div className="user_image">
              <div
                className="listing_image-container"
                style={{
                  backgroundImage: `url(${review.user.image_url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "80px",
                  width: "80px"
                }}
              ></div>
            </div>
            <div className="userdetails">
              <span>{review.user.name}</span>
              <span className="listing_price">
                {formatDate(review.time_created)}
              </span>
            </div>
          </div>
          <div className="review_review">
            <div className="star_rating">{makeStars(review.rating)}</div>
            <p className="review_text">{review.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = ({ app: { listings }, location: { payload: { id } }}) => {
    let listing = listings.find(value => value.id === id);
    if (!listing) {
      listing = JSON.parse(localStorage.getItem('single')) || {};
    }
    return { listing };
}

export default connect(mapStateToProps)(Listing);
