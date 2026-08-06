import React from "react";
import students from "../data/student";
import { Link, Outlet } from "react-router";

function Dashboard() {
  const totalStudents = students.length;
  const activeStudents = students.filter((student) => student.status === "Active").length;
  const inactiveStudents = students.filter((student) => student.status !== "Active").length;

  return (
    <div className="container">
      <div className="card dashboard-card">
        <div className="dashboard-header">
          <div>
            <h2>📊 Student Dashboard</h2>
            <p className="dashboard-subtitle">Quick summary of active, inactive, and total students.</p>
          </div>
          <Link className="btn" to="students">
            View All Students
          </Link>
        </div>

        <div className="summary-grid">
          <div className="summary-card summary-total">
            <span className="summary-icon">👥</span>
            <div>
              <h3>{totalStudents}</h3>
              <p>Total Students</p>
            </div>
          </div>

          <div className="summary-card summary-active">
            <span className="summary-icon">✅</span>
            <div>
              <h3>{activeStudents}</h3>
              <p>Active Students</p>
            </div>
          </div>

          <div className="summary-card summary-inactive">
            <span className="summary-icon">⚠️</span>
            <div>
              <h3>{inactiveStudents}</h3>
              <p>Inactive Students</p>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;