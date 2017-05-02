import { calculatorApi } from './config';

const REQUEST_CONSTRAINTS = 'calculator/REQUEST_CONSTRAINTS';
const RESPONSE_CONSTRAINTS = 'calculator/RESPONSE_CONSTRAINTS';


const initialState = {
    loaded: false,
    constraints: null,
    error: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_CONSTRAINTS:
            return {
                ...state,
                loading: true
            };
        case RESPONSE_CONSTRAINTS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                constraints: action.data
            };
        default:
            return state;
    }
}

export const requestConstraints = () => {
    return {
        type: REQUEST_CONSTRAINTS
    };
};

export const responseConstraints = json => {
    return {
        type: RESPONSE_CONSTRAINTS,
        data: json
    };
};

export const isLoaded = calculator => {
    return calculator &&
    !calculator.error &&
    !calculator.loading &&
    calculator.loaded;
}

export const loadConstraintsPromise = resources => {
    const { dispatch, getState } = resources;

    return fetch(calculatorApi.constraints)
        .then(response => response.json())
        .then(json => dispatch(responseConstraints(json)))
        .catch(error => console.log(error));
};

export const loadConstraints = () => resources => {
    loadConstraintsPromise(resources);
    return requestConstraints();
};
