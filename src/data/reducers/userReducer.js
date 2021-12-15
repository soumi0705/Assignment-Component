export const userState = {
  user_id: 0,
  roles: '',
  placement: '',
  course_id: 0,
  account: '',
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'STORE_USER_DATA':
      return {
        ...state,
        user_id: action.payload.user_id,
        roles: action.payload.roles,
        placement: action.payload.placement,
        course_id: action.payload.course_id,
        account: action.payload.account,
      };
    default:
      return state;
  }
};
