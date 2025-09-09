# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# 🌟 Community Events - React App

A simple **React-based application** to discover, explore, and join **local community events**.  
This project was built as part of the **Frontend Developer Intern Task**.

---

## 🚀 Features

- Browse a curated list of local events
- Filter events by **Type, Date, and Location**
- View **event details** (title, date, location, host, description)
- RSVP / Join events with confirmation
- (Optional) Create new events with validation
- Built with **React, React Router, TailwindCSS**

---

## 🛠 Tech Stack

- **Frontend Framework:** React (Vite)
- **Routing:** React Router
- **Styling:** TailwindCSS
- **State Management:** React hooks (or Redux Toolkit optional)
- **Data Source:** Mock JSON data (`events.json`)

---

## 📂 Project Structure

```
community-events/
│── public/
│   └── favicon.ico
│── src/
│   ├── assets/               # images/screenshots/logo
│   │   └── screenshot.svg
│   ├── components/           # reusable UI components
│   │   ├── EventCard.jsx
│   │   ├── EventFilter.jsx
│   │   ├── Pagination.jsx
│   │   ├── Navbar.jsx
│   │   └── Modal.jsx
│   ├── data/
│   │   └── events.json       # mock data
│   ├── pages/                # page-level components
│   │   ├── Home.jsx
│   │   ├── EventDetail.jsx
│   │   ├── CreateEvent.jsx
│   │   └── RSVPConfirmation.jsx
│   ├── App.jsx               # main app with routes
│   ├── main.jsx              # React entry point
│   ├── index.css             # global styles
│   └── utils/                # helper functions
│── .gitignore
│── package.json
│── tailwind.config.js
│── postcss.config.js
│── vite.config.js
│── README.md
```

---

## ⚙️ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/community-events.git
   cd community-events
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173
   ```

---

## 📸 Screenshot
![Image Alt](https://github.com/pranjalihajare/Local-Community-Events/blob/main/Screenshot%20from%202025-09-09%2020-29-26.png?raw=true)
