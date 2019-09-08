import * as React from 'react';

export const makeStars = (rating) => {
    const stars = [];
    let i;
    for (i = 1; i <= rating; i += 1) {
      stars.push(<ion-icon key={`fill${i}`} name="star"></ion-icon>);
    }

    if (i - rating === 0.5) {
      stars.push(<ion-icon key="half" name="star-half"></ion-icon>);
      for (i; i < 5; i += 1) {
        stars.push(
          <ion-icon key={`outline${i}`} name="star-outline"></ion-icon>
        );
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

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getDate();

  const month = date.getMonth();

  const year = date.getFullYear();

  return `${month}/${day}/${year}`
}