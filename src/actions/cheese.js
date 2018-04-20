import {API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = () => ({
    type: FETCH_CHEESES_ERROR
});


export const fetchCheeses = () => {
    return (dispatch) => {
        fetch(`${API_BASE_URL}/api/cheeses`)
        .then(response => response.json())
        .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
        .catch(err => console.log(err))
    }
};
