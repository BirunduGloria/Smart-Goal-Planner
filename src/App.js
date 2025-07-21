import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import GoalOverview from "./components/GoalOverview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3001/goals")
    .then((r) => r.json())
    .then((data) => setGoals(data))
    .catch((error) => console.error("Fetch failed:", error));
}, []);

  function addGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  function updateGoal(updatedGoal) {
    const updatedGoals = goals.map((goal) =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  }

  function deleteGoal(id) {
    setGoals(goals.filter((goal) => goal.id !== id));
  }

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalOverview goals={goals} />
      <GoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <GoalList goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} />
    </div>
  );
}

export default App;
