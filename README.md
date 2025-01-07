Finance Management Dashboard

A user-friendly finance management dashboard with authentication and data visualization, built using ReactJS, TypeScript, Chakra UI, Tailwind CSS, and Vite.

# Features Implemented

  Landing Page

Responsive and visually appealing design.

Navigation bar with app name, "Login" and "Sign Up" buttons.

Hero section describing the app's benefits.

Call-to-action button for "Sign Up"

  Authentication Pages

Sign Up Page:

Fields: Username, Email, Password, Confirm Password.

Form validation with error messages.

API calls to register users.

Login Page:

Fields: Email and Password.

Backend authentication and redirection to the dashboard.

  Protected Finance Dashboard

Secure Access: Accessible only after login using JWT.

Current Balance Widget: Displays user's balance from the backend.

Recent Transactions: Shows the latest 5 transactions with date, description, and amount.

Add Transaction Form: Fields for description, amount, and date with API submission.

  Responsiveness

Fully responsive for mobile, tablet, and desktop.

 Setup Instructions

Prerequisites:

Ensure you have the following tools installed:

Node.js and npm

Steps to Run Locally:

Clone the repository:

git clone https://github.com/BeamlakN/FinanceManagement.git
cd FinanceManagement

Install dependencies:

npm install


Environment Configuration:
Create a .env file for API URL and JWT secrets:

REACT_APP_API_URL=http://localhost:5000

Run the development server:

npm run dev


Open in Browser:
