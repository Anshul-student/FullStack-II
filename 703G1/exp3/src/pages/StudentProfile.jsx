import React from "react";
import { useParams } from "react-router";
import students from "../data/student";

function StudentProfile() {
  const { id } = useParams();

  const student = students.find(
    (std) => std.id === Number(id)
  );

  if (!student) {
    return <h2 style={{ color: "white" }}>Student Not Found</h2>;
  }

  return (
    <div className="profile">
      <h2>👨‍🎓 Student Profile</h2>

      <p><b>ID:</b> {student.id}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Age:</b> {student.age}</p>
      <p><b>Course:</b> {student.course}</p>
      <p><b>Grade:</b> {student.grade}</p>
      <p><b>City:</b> {student.city}</p>
      <p><b>Status:</b> {student.status}</p>
    </div>
  );
}

export default StudentProfile;