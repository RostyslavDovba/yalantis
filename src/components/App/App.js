import React from 'react';
import './App.css';
import EmployeesList from '../EmployeesList/EmployeesList';
import BirthdayList from '../BirthdayList/BirthdayList';

const App = () => {
  return (
    <div className="App">
      <EmployeesList />
      <BirthdayList />
    </div>
  );
};

export default App;
