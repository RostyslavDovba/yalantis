import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/actions';
import PropTypes from 'prop-types';

import './Employee.css';

const activeObj = {
  active: 'active',
  notActive: 'not-active',
};

const Employee = ({ firstName, lastName, isActive, id }) => {
  const [active, setIsActive] = useState(
    window.localStorage.getItem(id) || isActive
  );
  const dispatch = useDispatch();

  const handleActive = () => {
    active === activeObj.active
      ? setIsActive(activeObj.notActive)
      : setIsActive(activeObj.active);
    window.localStorage.setItem(
      id,
      active === activeObj.active ? activeObj.notActive : activeObj.active
    );

    dispatch(
      selectUser({
        id,
        isActive:
          active === activeObj.active ? activeObj.notActive : activeObj.active,
        firstName,
      })
    );
  };

  return (
    <div className="person">
      <div
        className={`d-flex person-name ${
          active === activeObj.active ? activeObj.active : ''
        }`}
      >{`${firstName} ${lastName}`}</div>
      <div>
        <label className="d-flex person-name">
          <input
            type="radio"
            checked={active === activeObj.notActive}
            onChange={handleActive}
          ></input>
          not active
        </label>
        <label className="d-flex person-name">
          <input
            type="radio"
            checked={active === activeObj.active}
            onChange={handleActive}
          ></input>
          active
        </label>
      </div>
    </div>
  );
};

Employee.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isActive: PropTypes.string,
  id: PropTypes.string,
};

export default Employee;
