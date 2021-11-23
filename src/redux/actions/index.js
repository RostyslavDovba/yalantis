import axios from 'axios';
export const FETCH_USERS = 'FETCH_USERS';
export const SELECT_USER = 'SELECT_USER';

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(
    'https://yalantis-react-school-api.yalantis.com/api/task0/users'
  );

  let data = response.data.map((el) => ({
    ...el,
    isActive: window.localStorage.getItem(el.id) || 'not-active',
  }));

  const birthdayListLS = Object.entries(localStorage)
    .filter((el) => el[1] === 'active')
    .map((el) => el[0]);

  const birthdayList =
    data && data.filter((item) => birthdayListLS.includes(item.id));

  dispatch({
    type: FETCH_USERS,
    payload: { data, birthdayList },
  });
};

export const selectUser = (item) => async (dispatch) => {
  Object.entries(localStorage).forEach((el) =>
    el[1] === 'not-active' ? window.localStorage.removeItem(el[0]) : null
  );
  dispatch({
    type: SELECT_USER,
    payload: item,
  });
};
