import { UserContextState } from '../../types/store-typings'
import { userConstants } from '../../constants'

export const UserReducer = (state: UserContextState, action: any) => {
  switch (action.type) {
    case userConstants.USER_REQUEST:
      return {
        ...state,
        error: false,
        fetching: true,
      }
    case userConstants.USER_SUCCESS:
      return {
        ...state,
        error: false,
        fetching: false,
        data: action.data
      }
    case userConstants.USER_FAILED:
      return {
        ...state,
        error: true,
        fetching: false,
        message: action.message
      }
    default:
      return state
  }
}

export const UserSetReducer = (state: UserContextState, action: any) => {
  switch (action.type) {
    case userConstants.USER_SET_REQUEST:
      return {
        ...state,
        error: false,
        fetching: true,
      }
    case userConstants.USER_SET_SUCCESS:
      return {
        ...state,
        error: false,
        fetching: false,
        data: action.data
      }
    case userConstants.USER_SET_FAILED:
      return {
        ...state,
        error: true,
        fetching: false,
        message: action.message
      }
    default:
      return state
  }
}
