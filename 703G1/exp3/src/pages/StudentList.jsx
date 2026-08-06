import React from "react";
import { Link, Outlet } from "react-router";
import students from "../data/student";

function StudentList() {
  return (
    <>
      <h2 style={{color:"white",marginBottom:"20px"}}>
        👨‍🎓 Student List
      </h2>

      {students.map((student) => (
        <div className="student" key={student.id}>

          <div>
            <h4>{student.name}</h4>
            <p>{student.course}</p>
          </div>

          <Link className="btn" to={`${student.id}`}>
            View Profile
          </Link>

        </div>
      ))}

      <Outlet />
    </>
  );
}

export default StudentList;