import {
  CHANGE_SEARCH_FIELD,
  REQEUEST_ROBOTS_PENDING,
  REQEUEST_ROBOTS_SUCCESS,
  REQEUEST_ROBOTS_FAILED
} from './constants'

const initialStateSearch = {
  searchField: '',
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: undefined,
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQEUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQEUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false })
    case REQEUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state
  }
}