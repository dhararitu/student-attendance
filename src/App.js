import React, { useState, useEffect } from 'react';

const App = () => {
  const [attendance, setAttendance] = useState({});
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    setStudentCount(Object.keys(attendance).length);
  }, [attendance]);

  const handleCheckIn = (rollNumber, studentName) => {
    setAttendance(prevAttendance => {
      return {
        ...prevAttendance,
        [rollNumber]: {
          studentName,
          checkInTime: new Date().toLocaleString()
        }
      };
    });
  };

  const handleCheckOut = rollNumber => {
    setAttendance(prevAttendance => {
      const updatedAttendance = { ...prevAttendance };
      updatedAttendance[rollNumber].checkOutTime = new Date().toLocaleString();
      return updatedAttendance;
    });
  };

  return (
    <div>
      <h1>Student Attendance</h1>
      <form>
        <label>
          Roll Number:
          <input type="text" name="rollNumber" />
        </label>
        <br />
        <label>
          Student Name:
          <input type="text" name="studentName" />
        </label>
        <br />
        <button type="button" onClick={() => handleCheckIn(rollNumber, studentName)}>
          Check In
        </button>
        <button type="button" onClick={() => handleCheckOut(rollNumber)}>
          Check Out
        </button>
      </form>
      <p>Number of students in school: {studentCount}</p>
    </div>
  );
};

export default App;