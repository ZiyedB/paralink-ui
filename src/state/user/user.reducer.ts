import { userActionTypes } from './user.actions';

export interface UserState {
  isLoggedIn: boolean;
  token: string;
}

const INITIAL_STATE: UserState = {
  isLoggedIn: false,
  token: '',
};

export const UserReducer = (state: UserState = INITIAL_STATE, action: any): UserState => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    case userActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
