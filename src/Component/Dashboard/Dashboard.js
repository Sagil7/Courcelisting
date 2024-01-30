import React from 'react'
import './Dashboard.css'
import { useEffect,useState } from 'react';
import Enrolledcard from '../Enrolledcard';
function Dashboard() {
const [enrolled,setenrolled]=useState([]);
     
    useEffect(() => {
        fetch('https://mocki.io/v1/fd46af9f-db4f-429d-8b1a-fc52342ae447')
        .then(response => response.json())
        .then(data => setenrolled(data))
        .catch(error => console.error('Error fetching course details:', error));
      }, []);
 console.log(enrolled);

  return (
    <div>
    <h3 style={{textAlign:'center'}}>Course Enrolled</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent:'center',marginTop:'30px'}}>
      {enrolled.map(course => (
        
        <Enrolledcard key={course.id} course={course} />
      ))}
    </div>
  </div>
      )
}

export default Dashboard
