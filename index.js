import * as React from 'react';
import { render } from 'react-dom';
import "./src/sass/main.scss"

const Home = () => <div>Hello World!</div>;

render(
    <Home />,
    document.getElementById('max')
);
