import { FETCH_USERS, SELECT_USER } from '../actions';

const initialState = {
  activeUsers: [],
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.data,
        activeUsers: action.payload.birthdayList,
      };

    case SELECT_USER:
      const birthdayListLS = Object.entries(localStorage)
        .filter((el) => el[1] === 'active')
        .map((el) => el[0]);

      const birthdayList =
        state.users &&
        state.users.filter((item) => birthdayListLS.includes(item.id));

      return {
        ...state,
        activeUsers: [...birthdayList],
      };
    default:
      return state;
  }
};

export default userReducer;
