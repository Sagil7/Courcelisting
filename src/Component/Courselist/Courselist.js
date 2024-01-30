import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Courselist.css'
import photo from './coursepic.png'
function Courselist() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      // Replace 'http://dummyapi.com/courses' with your API endpoint or file path
      fetch('https://mocki.io/v1/6e795371-92d0-4591-a61f-73e652f4ee03')
        .then(response => response.json())
        .then(data => setCourses(data))
        .catch(error => console.error('Error fetching courses:', error));
    }, []);
  
    const filteredCourses = courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <>
      <div className='container'>
        
        <input className='search'
          type="text"
          placeholder="Search by course name or instructor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

     <div className='list'>
          {filteredCourses.map(course => (
              
              <Link to={`/course/${course.id}`}>
                <div className='items'>
                    <img src={course.url} alt="" />
                {course.name} - {course.instructor}
                </div>
              </Link>
            
          ))}
       
        </div>
      </div>
      </>
    );
  
}

export default Courselist
