import { createSelector } from 'reselect';
import { UserState } from './user.reducer';

const userState = (state: any): UserState => state.user;

const isLoggedIn = createSelector(userState, (state: UserState) => state.isLoggedIn);

export const userQuery = { isLoggedIn };
