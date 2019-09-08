import * as React from 'react';
import { connect } from 'react-redux';
import BrandedText from './BrandedText';

import { makeStars } from '../utilities';

class Listing extends React.PureComponent {
    render() {
        const { listing, index, _navigate } = this.props;
        return (
          <div
            onClick={() => _navigate(listing)}
            className="listing_details"
            style={{
              animation: `fadein ${index * 0.7 + 1}s`
            }}
          >
            <div className="listing_details-layout">
              <div
                className="listing_image-container"
                style={{
                  backgroundImage: `url(${listing.photos[0]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "228px",
                  width: "100%"
                }}
              ></div>
              <BrandedText type="h3">{listing.name}</BrandedText>
              <span className="star_rating">
                {makeStars(listing.rating)}
              </span>
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
            </div>
            <div className="listing_learnMore">
              <span className="learnMore_text">LEARN MORE</span>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
  _navigate: (listing) => {
    localStorage.setItem('single', JSON.stringify(listing));
    dispatch({ type: 'LISTING', payload: { id: listing.id } });
  },
});

export default connect(null, mapDispatchToProps)(Listing);
