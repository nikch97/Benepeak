import { UserContextState } from '../../types/store-typings'
import { userConstants } from '../../constants';

export const UserActions = (state: UserContextState, dispatch: any) => ({
  userRequest: (data: any) => {
    dispatch({ type: userConstants.USER_REQUEST })
  },

  userSetRequest: (data: any) => {
    dispatch({ type: userConstants.USER_SET_REQUEST, data })
  }

})
