// CourseDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import photo from '../Courselist/coursepic.png'
import './Coursedetail.css'
const Coursedetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);




console.log(course);
for (let i = 0; i < course.length; i++) {
    const obj=course[i];
    // console.log("object is",obj)
    if(obj['id']==courseId)
    {
        setCourse(obj);
    }
  

}
console.log(course);

useEffect(() => {
  fetch('https://mocki.io/v1/af78554a-9178-4b18-bdd1-48b4ac4f78e2')
  .then(response => response.json())
  .then(data => setCourse(data))
  .catch(error => console.error('Error fetching course details:', error));
}, [courseId]);



  return (
    <div>


      <div className='maincontainer'>
        <div className="leftcontainer">
          <img src={course.url} alt="" />
          <h2>{course.name}</h2>
          <p id='instructor'> by {course.instructor}</p>
         
        </div>
        <div className="rightcontainer">
          <p id='enroll' style={{textAlign:'right',}}>enrollment {course.enrollmentStatus}</p>
          <h2>{course.description}</h2>
          <p>prerequisite-{course.prerequisite}</p>
          <p>Course Duration- {course.duration}</p>
          <p>Schedule- {course.schedule}</p>
          <p>Location-{course.location}</p>
          <details>
        <summary><strong> View Syllabus:</strong></summary>
        <ul>
          {course.syllabus && course.syllabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </details>

        </div>
         
      </div>
      
    </div>
  );
};

export default Coursedetails;
