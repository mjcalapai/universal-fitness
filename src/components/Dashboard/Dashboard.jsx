import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Today’s Date: {new Date().toLocaleDateString()}</p>
      <p>Your Location: Gym Near You</p>
      <button onClick={() => (window.location.href = "/begin-workout")}>
        Begin Workout
      </button>
      <button>Data</button>
      <button>Social</button>
    </div>
  );
}

export default Dashboard;