import { initialState } from '../initialState';
import { UserReducer } from './userReducer';

const reducer = (state = initialState, action) => {
  return {
    userState: UserReducer(state.userState, action),
  };
};

export { initialState, reducer };
