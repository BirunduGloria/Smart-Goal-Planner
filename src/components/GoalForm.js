import React, { useState } from "react";

const initialForm = {
  name: "",
  targetAmount: "",
  category: "",
  deadline: ""
};

function GoalForm({ onAdd }) {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...formData,
      savedAmount: 0,
      createdAt: new Date().toISOString()
    };
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal)
    })
      .then(res => res.json())
      .then(data => {
        onAdd(data);
        setFormData(initialForm);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <h2>Add New Goal</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
