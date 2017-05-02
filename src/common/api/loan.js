import { calculatorApi } from './config';
import { stringify } from 'query-string';

const REQUEST_LOAN_OFFER = 'calculator/REQUEST_LOAN_OFFER';
const RESPONSE_LOAN_OFFER = 'calculator/RESPONSE_LOAN_OFFER';

const initialState = {
    loaded: false,
    error: null,
    result: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_LOAN_OFFER:
            return {
                ...state,
                loading: true
            };
        case RESPONSE_LOAN_OFFER:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                result: action.data
            };
        default:
            return state;
    }
}

export const requestLoanOffer = () => {
    return {
        type: REQUEST_LOAN_OFFER
    };
};

export const responseLoanOffer = json => {
    return {
        type: RESPONSE_LOAN_OFFER,
        data: json
    };
};

const createLoanUrl = params => {
    return calculatorApi.loan + '?' + stringify(params);
};


export const requestOffer = params => resources => {
    const { dispatch, getState } = resources;

    return fetch(createLoanUrl(params), {
            method: 'GET',
            cache: 'default'
        })
        .then(response => response.json())
        .then(json => dispatch(responseLoanOffer(json)))
        .catch(error => console.log(error));
    return requestLoanOffer();
};
