import React from 'react'

const course = [
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' },
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' },
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' },
];

const courses = () => {
    return (
      <div className="card-container">
        {course.map((courses, index) => (
          <div key={index} className="cardborder">
            <div className="card-body">
              <h4 className="card-title">Course Code: {courses.coursecode}</h4>
              <p className="card-text">Course Title: {courses.coursetitle}</p>
              <p className="card-text">L-T-P-S: {courses.ltps}</p>
              <p className="card-text">credits: {courses.credits}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default courses
