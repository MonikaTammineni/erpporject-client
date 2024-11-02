import React, { useState } from 'react';

const FeedbackForm = () => {
  const [courseName, setCourseName] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [communicationSkills, setCommunicationSkills] = useState('');
  const [remarks, setRemarks] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      courseName,
      facultyName,
      communicationSkills,
      remarks,
    };

    setSubmissions([...submissions, newSubmission]);

    // Clear the form fields
    setCourseName('');
    setFacultyName('');
    setCommunicationSkills('');
    setRemarks('');
  };

  return (
    <div>
      <style>
        {`
          table {
            width: 70%;
            border-collapse: collapse;
          }
          
          table td, table th {
            width: 25%;
            padding: 8px;
            text-align: center;
            border: none;
          }

          button {
            padding: 8px 16px;
            color: black;
            border: none;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }
        `}
      </style>
      
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="courseName">Course</label></td>
              <td><input type="text" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="Enter Course" /></td>
            </tr>
            <tr>
              <td><label htmlFor="facultyName">Faculty</label></td>
              <td><input type="text" id="facultyName" value={facultyName} onChange={(e) => setFacultyName(e.target.value)} placeholder="Enter Faculty Name" /></td>
            </tr>
            <tr>
              <td>Rate communication skills</td>
              <td>
                <label>
                  <input type="radio" name="recommend" value="Very Good" checked={communicationSkills === 'Very Good'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Very Good
                </label>
                <label>
                  <input type="radio" name="recommend" value="Good" checked={communicationSkills === 'Good'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Good
                </label>
                <label>
                  <input type="radio" name="recommend" value="Bad" checked={communicationSkills === 'Bad'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Bad
                </label>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="remarks">Remarks:</label></td>
              <td><input type="text" id="remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Enter any remarks" /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* Display the submissions */}
      {submissions.length > 0 && (
        <div>
          <h2>SUBMISSIONS</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Faculty</th>
                <th>Communication Skills</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index}>
                  <td>{submission.courseName}</td>
                  <td>{submission.facultyName}</td>
                  <td>{submission.communicationSkills}</td>
                  <td>{submission.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
