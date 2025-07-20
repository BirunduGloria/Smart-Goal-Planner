import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import GoalOverview from "./components/GoalOverview";

const API = "http://localhost:3000/goals";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setGoals)
      .catch(console.error);
  }, []);

  const addGoal = (newGoal) => setGoals([...goals, newGoal]);

  const updateGoal = (updatedGoal) => {
    setGoals(goals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="container">
      <h1>🎯 Smart Goal Planner</h1>
      <GoalForm onAdd={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <GoalOverview goals={goals} />
      <GoalList
        goals={goals}
        onUpdate={updateGoal}
        onDelete={deleteGoal}
      />
    </div>
  );
}

export default App;
