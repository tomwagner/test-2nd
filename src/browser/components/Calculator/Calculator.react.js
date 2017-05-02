import React, { Component, PropTypes } from 'react';
import Slider from '../Slider/Slider.react';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';
import CalculatorRow from '../CalculatorRow/CalculatorRow.react';
import CalculatorResult from '../CalculatorResult/CalculatorResult.react';
import { loadConstraints, isLoaded } from '../../../common/api/constraints';
import { requestOffer } from '../../../common/api/loan';
import { setUserInput, isSet } from '../../../common/api/form';

@connect(
    state => ({
        calculator: state.calculator.constraints,
        form: state.calculator.form
    }),
    {
        loadConstraints,
        requestOffer
    }
)
export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { loadConstraints } = this.props;
        loadConstraints();
    }

    componentDidUpdate() {
        const { requestOffer, form } = this.props;
        if (isSet(form)) {
            requestOffer(form);
        }
    }

    render() {
        const { calculator, result } = this.props;

        if (isLoaded(calculator)) {
            const {
                constraints: { amountInterval, termInterval }
            } = calculator;

            return (
                <div>
                    <CalculatorRow name="amount" constraints={amountInterval} />
                    <CalculatorRow name="term" constraints={termInterval} />
                    <CalculatorResult />
                </div>
            );
        } else {
            return <div>Loading</div>;
        }
    }
}
