import * as React from "react";
import { connect } from 'react-redux';
import BrandedText from "../components/BrandedText";

const Listing = ({ listing }) => (
  <BrandedText type="h1">{listing.name}</BrandedText>
);

const mapStateToProps = ({ app: { listings }, location: { payload: { id } }}) => {
    const listing = listings.find(value => value.id === id);
    return { listing };
}

export default connect(mapStateToProps)(Listing);
