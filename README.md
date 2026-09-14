# Moss & Thorn Nursery — Plant Nursery Order System

A lightweight Node.js and Express web application built for **CS551S: Web Development (Assessment 2)**. This project adds a functional server-side backend to the Moss & Thorn Nursery website to process, validate, and display plant orders stored in server memory.

---

## Technical Features & Implementation

### Core Architecture & Server Setup
* **Static File Serving:** Configured via `express.static('public')` in `server.js` to deliver static HTML/CSS files located in the `/public` directory.
* **Body Parsing:** Configured with `express.urlencoded()` and `express.json()` middleware in `server.js` to process incoming form payloads.
* **Port Configuration:** Server starts and listens on port `3000`.

### Order Handling & Data Management
* **POST Route:** Handles order creation via `POST /api/orders` in `server.js`.
* **In-Memory Storage:** Stores valid incoming orders in a global server array (`orders = []`) for the duration of the server session.

### Routing, Validation & Session History
* **Validation & Redirects:** Validates that required fields (**Plant Name** and **Quantity**) are present and valid.
* **Success Routing:** Valid orders redirect to `/success.html`.
* **Error Handling:** Missing or invalid submissions redirect to `/error.html`.
* **Order History View:** Accessible via `/orders.html`, displaying all active session orders stored in server memory.

---

## Project Structure

```text
.
├── public/
│   ├── index.html       # Main shop page containing the order form
│   ├── success.html     # Confirmation redirect page
│   ├── error.html       # Validation error redirect page
│   ├── orders.html      # Session order history page
│   └── styles.css       # Site styling
├── server.js            # Express server configuration & routes
├── package.json         # Node dependencies & project scripts
└── README.md            # Project documentation

### How to Run the Project Locally
1. Extract/Clone the files into your working directory.
2. Install dependencies (opens terminal in project root):

Bash
npm install
Start the Express server:

Bash
node server.js
(Or run npm start if script is configured).

### Access the application in your web browser:

Main Order Page: http://localhost:3000/ or http://localhost:3000/index.html

Order History Page: http://localhost:3000/orders.html

###Academic Integrity & Citation
This project was completed independently as part of individual assessment requirements for CS551S at the University of Aberdeen.
