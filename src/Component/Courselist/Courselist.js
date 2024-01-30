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
      fetch('https://mocki.io/v1/e0d07c5f-c428-41b9-bdbb-92d64a41412c')
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
                    <div className='textitems'>
                      <p>     {course.name} by {course.instructor}   </p>
                      <p><i class="fa-solid fa-thumbs-up fa-xs"> {course.likes}</i> </p>
                      
                    </div>
                 
                </div>
              </Link>
            
          ))}
       
        </div>
        
      </div>
      </>
    );
  
}

export default Courselist
