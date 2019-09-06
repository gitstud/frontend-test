import * as React from 'react';

export default class Listing extends React.PureComponent {
    render() {
        const { listing } = this.props;
        return (
          <div className="listing_details">
            <div
              className="listing_image-container"
              style={{
                backgroundImage: `url(${listing.photos[0]})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '228px',
                width: '100%'
              }}
            ></div>
            <span>{listing.name}</span>
            <span>{listing.rating}</span>
            <span>{listing.categories[0].title}</span>
            <span>{listing.price}</span>
            <span>{listing.hours.is_open_now}</span>
          </div>
        );
    }
}
