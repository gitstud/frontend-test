import * as React from 'react';

const styles = {
  h1: "branded_h1",
  h2: "branded_h2",
  h3: "branded_h3",
  p: "branded_p",
  span: "branded_span",
};

export default ({ type, children }) => (
    <span className={styles[type]}>
        {children}
    </span>
);
