import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState("");
  const [goalId, setGoalId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = goals.find(g => g.id === parseInt(goalId));
    if (!goal) return;

    const updatedGoal = {
      ...goal,
      savedAmount: parseFloat(goal.savedAmount) + parseFloat(amount)
    };

    fetch(`http://localhost:3000/goals/${goalId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount })
    })
      .then(res => res.json())
      .then(onDeposit);

    setAmount("");
    setGoalId("");
  };

  return (
    <form onSubmit={handleSubmit} className="deposit-form">
      <h2>Make a Deposit</h2>
      <select value={goalId} onChange={e => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
