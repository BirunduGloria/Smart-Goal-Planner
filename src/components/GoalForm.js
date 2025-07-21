import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: "",
    category: "",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newGoal) => {
        onAddGoal(newGoal);
        setFormData({
          name: "",
          targetAmount: "",
          savedAmount: "",
          category: "",
          deadline: "",
        });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Goal Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="targetAmount"
        type="number"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={handleChange}
        required
      />
      <input
        name="savedAmount"
        type="number"
        placeholder="Saved Amount"
        value={formData.savedAmount}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        name="deadline"
        type="date"
        value={formData.deadline}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
