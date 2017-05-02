const SET_USER_INPUT = 'calculator/SET_USER_INPUT';

const initialState = {
    amount: null,
    term: null,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_USER_INPUT:
            return {
                ...state,
                ...action.input
            };
        default:
            return state;
    }
}

export const isSet = form => {
    return (form.amount !== null && form.term !== null)
}

export const setUserInput = input => {
    return {
        type: SET_USER_INPUT,
        input: input
    };
};
