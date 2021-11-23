import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './EmployeesList.css';
import { fetchUsers } from '../../redux/actions';
import Employee from './Employee/Employee';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const EmployeesList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="employees">
      <h2 className="employees-title">Employees</h2>
      <div className="list-wr">
        {alphabet.split('').map((el, index) => {
          const people =
            userList &&
            userList.filter(
              (per) =>
                per.firstName.charAt(0).toLowerCase() === el.toLowerCase()
            );
          return (
            <div className="category" key={`el_${index}`}>
              <div className="category-letter">{el.toUpperCase()}</div>
              <div className="category-people">
                {people && people.length ? (
                  people
                    .sort(function (a, b) {
                      if (a.firstName < b.firstName) {
                        return -1;
                      }
                      if (a.firstName > b.firstName) {
                        return 1;
                      }
                      return 0;
                    })
                    .map((person) => {
                      return (
                        <Employee
                          key={person.id}
                          firstName={person.firstName}
                          lastName={person.lastName}
                          isActive={person.isActive}
                          id={person.id}
                        />
                      );
                    })
                ) : (
                  <div className="person-name">No Employees</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeesList;
