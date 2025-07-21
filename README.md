 Smart Goal Planner
A React-based financial goal tracking app that helps users create, manage, and track progress towards their savings goals. Built for the Moringa School Phase 2 Week-2 Code Challenge, the app demonstrates mastery of React state, props, and RESTful API integration with JSON Server.

 Features
 GOAL MANAGEMENT
 *Create goals with:

1.Title

2.Description

3.Target amount

4.Category

5.Deadline

*Edit existing goals

*Delete goals

 Deposit Tracking
Make deposits towards a specific goal

Automatically update the saved amount

Validate deposits with form handling

 Progress Monitoring
Track saved vs. target amount for each goal

Display remaining balance

Visual progress bar for each goal

 Goal Overview Dashboard
Total number of goals

Total money saved

Completed goals

Time left until deadline per goal

Deadline warnings:
 Within 30 days → show warning

 Overdue → show alert if incomplete

🛠 Tech Stack
Frontend: React, HTML, CSS

Backend: JSON Server (local API)

Styling: Custom CSS

 Folder Structure
pgsql
Copy
Edit
smart-goal-planner/
├── public/
├── src/
│   ├── components/
│   │   ├── GoalCard.js
│   │   ├── GoalForm.js
│   │   ├── GoalList.js
│   │   ├── GoalOverview.js
│   │   └── DepositForm.js
│   ├── App.js
│   └── index.js
├── db.json
├── package.json
└── README.md
⚙️ Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/smart-goal-planner.git
cd smart-goal-planner
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run JSON Server
Ensure db.json exists in your root directory:

json
Copy
Edit
{
  "goals": []
}
Then start the server:

bash
Copy
Edit
npx json-server --watch db.json --port 3000
4. Start the React App
bash
Copy
Edit
npm start
The app will run at: http://localhost:3001

 Key Functionality
Adding a Goal
jsx
Copy
Edit
onAddGoal(goalData)
Editing a Goal
jsx
Copy
Edit
onEditGoal(goalData)
Deleting a Goal
jsx
Copy
Edit
onDeleteGoal(goalId)
Making a Deposit
jsx
Copy
Edit
onDeposit(updatedGoal)

✍ Author
Gloria Birundu
GitHub | Moringa School

📃License
This project is for educational purposes under the MIT License.

