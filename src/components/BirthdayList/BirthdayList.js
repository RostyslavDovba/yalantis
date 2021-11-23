import React from 'react';
import './BirthdayList.css';
import { useSelector } from 'react-redux';
import PersonBirthday from './PersonBirthday/PersonBirthday';

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const mothsFromToday = monthNames
  .slice(new Date().getMonth())
  .concat(monthNames.slice(0, new Date().getMonth()));

const BirthdayList = () => {
  const birthdayList = useSelector((state) => state.users.activeUsers);

  return (
    <div className="birthday-list-wr">
      <h2>Employees birthday</h2>
      <div className="birthday-list-wr">
        {mothsFromToday && birthdayList.length ? (
          mothsFromToday.map((el, index) => {
            const mothBirthdays =
              birthdayList &&
              birthdayList.filter(
                (birthday) =>
                  monthNames[new Date(birthday.dob).getMonth()] === el
              );

            return (
              <div className="category-month" key={`${el}_${index}`}>
                <div className="month-name">{el}</div>
                <div className="category-list">
                  {mothBirthdays && mothBirthdays.length ? (
                    mothBirthdays
                      .sort(function (a, b) {
                        if (a.lastName < b.lastName) {
                          return -1;
                        }
                        if (a.lastName > b.lastName) {
                          return 1;
                        }
                        return 0;
                      })
                      .map((birthdayPerson) => {
                        return (
                          <PersonBirthday
                            key={birthdayPerson.id}
                            lastName={birthdayPerson.lastName}
                            firstName={birthdayPerson.firstName}
                            birthday={birthdayPerson.dob}
                          />
                        );
                      })
                  ) : (
                    <div>No Employees</div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>Employees List is empty</div>
        )}
      </div>
    </div>
  );
};

export default BirthdayList;
