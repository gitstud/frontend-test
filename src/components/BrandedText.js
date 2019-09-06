import * as React from 'react';

const styles = {
  h1: {
    fontWeight: "300",
    fontSize: "54px",
    color: "#333333",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: '15px 0px',
    display: "block"
  },
  h2: {
    fontWeight: "300",
    fontSize: "34px",
    color: "#333333",
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "block"
  },
  h3: {
    fontWeight: "300",
    fontSize: "24px",
    color: "#333333",
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "block"
  },
  p: {
    color: "#666666",
    fontSize: "22px",
    fontWeight: "lighter",
    fontFamily: "Arial, Helvetica, sans-serif",
    lineHeight: "25px",
    display: "block"
  },
  span: {}
};

export default ({ type, children }) => (
    <span
        style={styles[type]}
    >
        {children}
    </span>
);
