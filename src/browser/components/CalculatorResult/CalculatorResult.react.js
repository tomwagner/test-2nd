import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(state => ({ loan: state.calculator.loan }))
export default class CalculatorResult extends Component {
    render() {
        const { loan } = this.props;

        if (loan && !loan.error && !loan.loading && loan.loaded) {
            const {
                result: {
                    totalPrincipal,
                    term,
                    totalCostOfCredit,
                    totalRepayableAmount,
                    monthlyPayment
                }
            } = loan;

            return (
                <dl>
                    <dt>totalPrincipal</dt>
                    <dd>{totalPrincipal}</dd>
                    <dt>term</dt>
                    <dd>{term}</dd>
                    <dt>totalCostOfCredit</dt>
                    <dd>{totalCostOfCredit}</dd>
                    <dt>totalRepayableAmount</dt>
                    <dd>{totalRepayableAmount}</dd>
                    <dt>monthlyPayment</dt>
                    <dd>{monthlyPayment}</dd>
                </dl>
            );
        } else {
            return <div />;
        }
    }
}
