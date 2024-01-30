import React from 'react'
import { useState } from 'react';
function Enrolledcard({ course }) {
    const [isChecked, setChecked] = useState(false);
    const [a,seta]=useState(course.progress_bar+'%');
    const [vis,setvis]=useState({display:'static'})
    const handleCheckboxChange=(e)=>{
   setChecked(e.target.checked)
   if(!isChecked)
   {
     seta(100+'%')
     setvis({display:'none'})
   }
  }
  
  return (
   
    <div style={{ display:'flex', flexDirection:'column',justifyContent:'centre', border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px',borderRadius:'25px' ,backgroundColor:'#27005D',color:'white'}}>
    <img src={course.thumbnail} alt={course.name} style={{ maxWidth: '100%', marginBottom: '10px' }} />
    <h3>{course.name}</h3>
    <p style={{marginBottom:'0px'}}>by {course.instructor}</p>
    <p>Due Date-{course.due_date}</p>
    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-success" style={{width: a}}></div>
    </div>
  
     <label style={vis}>
        <input    type="checkbox"     checked={isChecked}  onChange={handleCheckboxChange}    />
        Mark as completed
      </label>

  </div>
  )
}

export default Enrolledcard
