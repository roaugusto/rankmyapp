import { LOAD_RANKING, SET_COLS, SET_WORDS, SET_FIRST_LIST, SET_SECOND_LIST } from '../actions/actionTypes'

const initialState = {
    ranks: [],
    rangeDates: [],
    cols: [],
    words: [],
    firstList: [],
    secondList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RANKING:
            return {
                ...state,
                ranks: action.ranks,
                rangeDates: action.rangeDates
            }
        case SET_COLS:
            return {
                ...state,
                cols: action.payload
            }
        case SET_WORDS:
            return {
                ...state,
                words: action.payload
            }
        case SET_FIRST_LIST:
            return {
                ...state,
                firstList: action.payload
            }
        case SET_SECOND_LIST:
            return {
                ...state,
                secondList: action.payload
            }
        default:
            return state
    }
}

export default reducer