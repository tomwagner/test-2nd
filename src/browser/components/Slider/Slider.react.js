import React, { PropTypes, Component } from 'react';
import ReactSlider from 'react-slider';

export default class Slider extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        value: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
    };

    render() {
        const { max, min, step, value, onChange } = this.props;

        return (
            <div>
                <ReactSlider
                    min={min}
                    max={max}
                    step={step}
                    orientation={'horizontal'}
                    className={'horizontal-slider'}
                    withBars={true}
                    pearling={true}
                    value={value}
                    onChange={onChange}
                />
                currentValue = {value},
                min = {min},
                max = {max},
                step = {step}
            </div>
        );
    }
}
