import axios from 'axios'
import { urlencoded } from '../utils/helper'

import {
  DESCRIPTION_CHANGED,
  INPUT_CLEARED,
  TODO_ADDED,
  TODO_DELETED,
  TODO_SEARCHED,
  TOGGLE_DONE
} from './todoActionsNames'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.value
})

export const search = () => {
  return dispatch => {
    axios.get(`${URL}?sort=-createdAt`)
      .then(resp => dispatch({ type: TODO_SEARCHED, payload: resp.data }))
  }
}

export const add = description => {
  return dispatch => {
    axios.post(URL, urlencoded({ description }))
      .then(resp => dispatch({ type: TODO_ADDED, payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}

export const toggleDone = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, urlencoded({ ...todo, done: !todo.done }))
      .then(resp => dispatch({ type: TOGGLE_DONE }))
      .then(resp => dispatch(search()))
  }
}

export const deleteTodo = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => dispatch({ type: TODO_DELETED }))
      .then(resp => dispatch(search()))
  }
}

export const clear = () => {
  return {
    type: INPUT_CLEARED,
    payload: ''
  }
}
