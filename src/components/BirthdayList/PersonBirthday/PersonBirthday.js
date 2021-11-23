import React from 'react';
import './PersonBirthday.css';
import { monthNames } from '../BirthdayList';
import PropTypes from 'prop-types';

const PersonBirthday = ({ firstName, lastName, birthday }) => {
  const birthdayDate = new Date(birthday);
  return (
    <div className="person-birthday">
      <div>{`${firstName} ${lastName} - ${birthdayDate.getDate()}
      ${
        monthNames[birthdayDate.getMonth()]
      }, ${birthdayDate.getFullYear()}`}</div>
    </div>
  );
};

PersonBirthday.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birthday: PropTypes.string,
};

export default PersonBirthday;
