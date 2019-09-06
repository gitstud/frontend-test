import * as React from 'react';
import { connect } from 'react-redux';
import BrandedText from './BrandedText';

class Listing extends React.PureComponent {
    makeStars = (rating) => {
      const stars = [];
      let i;
      for (i = 1; i <= rating; i += 1) {
        stars.push(<ion-icon key={`fill${i}`} name="star"></ion-icon>);
      }

      if (i - rating === 0.5) {
        stars.push(<ion-icon key="half" name="star-half"></ion-icon>);
        for (i; i < 5; i += 1) {
          stars.push(<ion-icon key={`outline${i}`} name="star-outline"></ion-icon>);
        }
      } else {
        for (i; i <= 5; i += 1) {
          stars.push(
            <ion-icon key={`outline${i}`} name="star-outline"></ion-icon>
          );
        }
      }
      return stars;
    }

    render() {
        const { listing, index, _navigate } = this.props;
        return (
          <div
            onClick={() => _navigate(listing.id)}
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
                {this.makeStars(listing.rating)}
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
  _navigate: (id) => dispatch({ type: 'LISTING', payload: { id } }),
});

export default connect(null, mapDispatchToProps)(Listing);
