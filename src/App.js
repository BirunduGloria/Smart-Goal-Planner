import React, { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import GoalOverview from "./components/GoalOverview";
import DepositForm from "./components/DepositForm"; 
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);


  useEffect(() => {
    fetch("https://test-app-090.onrender.com")
      .then((res) => res.json())
      .then(setGoals)
      .catch((error) => console.error("Failed to fetch goals:", error));
  }, []);

  
  const handleAddGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };


  const handleDeleteGoal = (goalId) => {
    setGoals(goals.filter((goal) => goal.id !== goalId));
  };


  const handleEditGoal = (updatedGoal) => {
    fetch(`https://test-app-090.onrender.com/${updatedGoal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedGoal)
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedGoals = goals.map((goal) =>
          goal.id === data.id ? data : goal
        );
        setGoals(updatedGoals);
      });
  };


  const handleDeposit = (updatedGoal) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  };

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>

      <GoalForm onAddGoal={handleAddGoal} />
      <GoalOverview goals={goals} />

      <DepositForm goals={goals} onDeposit={handleDeposit} /> {/* ✅ Added */}

      <GoalList
        goals={goals}
        onDelete={handleDeleteGoal}
        onEdit={handleEditGoal}
      />
    </div>
  );
}

export default App;
