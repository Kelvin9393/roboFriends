import {
  CHANGE_SEARCH_FIELD,
  REQEUEST_ROBOTS_PENDING,
  REQEUEST_ROBOTS_SUCCESS,
  REQEUEST_ROBOTS_FAILED
} from './constants'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQEUEST_ROBOTS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQEUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQEUEST_ROBOTS_FAILED, payload: error }))
}