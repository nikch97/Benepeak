import AP from './Api';
import { userConstants } from '../constants';

export const getUser = (dispatch: any) => (action: any) => {
  switch (action.type) {
    case userConstants.USER_REQUEST:
      return AP.getProfile()
        .then(res => dispatch({
          type: userConstants.USER_SUCCESS,
          data: res.data
        }))
        .catch(err => dispatch({
          type: userConstants.USER_FAILED,
          message: err.response.data
        }))
    default: dispatch(action)
  }
}

export const setUser = (dispatch: any) => (action: any) => {
  console.log(action);
  switch (action.type) {
    case userConstants.USER_SET_REQUEST:
      return AP.addUser(action.data)
        .then(res => dispatch({
          type: userConstants.USER_SET_SUCCESS,
          data: res.data
        }))
        .catch(err => dispatch({
          type: userConstants.USER_SET_FAILED,
          message: err.response.data
        }))
    default: dispatch(action)
  }
}
