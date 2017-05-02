import React, { Component, PropTypes } from 'react';
import Slider from '../Slider/Slider.react';
import { connect } from 'react-redux';
import { setUserInput } from '../../../common/api/form';

@connect(state => ({ form: state.calculator.form }), {
    setUserInput
})
export default class CalculatorRow extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        constraints: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        const {
            constraints: { defaultValue }
        } = this.props;

        this.saveState(defaultValue);
    }


    saveState(value) {
        const { name, setUserInput } = this.props;
        const input = {};
        input[name] = value;
        setUserInput(input);
    }

    createSelectOptions() {
        const { constraints: { max, min, step } } = this.props;

        var options = [];
        for (var i = min; i < max; i++) {
            const stepValue = i * step;
            options.push(
                <option key={stepValue} value={stepValue}>{stepValue}</option>
            );
        }
        return options;
    }

    handleSelectChange(event) {
        this.saveState(parseInt(event.target.value));
    }

    handleSliderChange(value) {
        this.saveState(value);
    }

    render() {
        const {
            form,
            name,
            constraints: { defaultValue, max, min, step }
        } = this.props;
        const value = form[name] || 0;
        const options = this.createSelectOptions();
        return (
            <div>
                <div>{name}</div>
                <Slider
                    max={max}
                    min={min}
                    step={step}
                    value={value}
                    onChange={this.handleSliderChange.bind(this)}
                />
                <select
                    value={value}
                    onChange={this.handleSelectChange.bind(this)}
                >
                    {options}
                </select>
            </div>
        );
    }
}
