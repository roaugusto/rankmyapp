import { LOAD_RANKING, SET_COLS, SET_WORDS, SET_FIRST_LIST, SET_SECOND_LIST } from './actionTypes'
import axios from 'axios'
import jsonQuery from 'json-query'

import moment from 'moment'

export const loadRanks = (ranks, rangeDates) => {
    return {
        type: LOAD_RANKING,
        ranks: ranks,
        rangeDates: rangeDates
    }
}

export const getRanks = () => {
    return dispatch => {
        axios.get(`http://www.mocky.io/v2/5a880f353000004f007f93c5.json`)
            .then(res => {
                const ranks = res.data
                const listDates = jsonQuery('formattedDate', { data: res.data })
                const rangeDates = []
                listDates.value.map(item => (
                    rangeDates.push(moment(item).toDate())
                ))
                dispatch(loadRanks(ranks.reverse(), rangeDates))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const setCols = cols => {
    return {
        type: SET_COLS,
        payload: cols
    }
}

export const setWords = words => {
    return {
        type: SET_WORDS,
        payload: words
    }
}

export const setFirstList = list => {
    return {
        type: SET_FIRST_LIST,
        payload: list
    }
}

export const setSecondList = list => {
    return {
        type: SET_SECOND_LIST,
        payload: list
    }
}
