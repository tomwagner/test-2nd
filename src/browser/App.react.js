import Helmet from 'react-helmet';
import React from 'react';
import Calculator from './components/Calculator/Calculator.react';

const App = () => (
    <div>
        <Helmet title="Loan app" />
        <Calculator />
    </div>
);

export default App;
