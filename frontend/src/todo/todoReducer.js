import {
  DESCRIPTION_CHANGED,
  INPUT_CLEARED,
  TODO_ADDED,
  TODO_DELETED,
  TODO_SEARCHED,
  TOGGLE_DONE
} from './todoActionsNames'

const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload }

    case TODO_SEARCHED:
      return { ...state, list: action.payload }

    case TODO_DELETED:
      return state

    case TOGGLE_DONE:
      return state

    case TODO_ADDED:
    case INPUT_CLEARED:
      return { ...state, description: '' }

    default:
      return state
  }
}
