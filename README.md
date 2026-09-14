Moss & Thorn Nursery — Plant Nursery Order System
A lightweight Node.js and Express web application built for the CS551S: Web Development (Assessment 2) individual coursework. This project adds a functional server-side backend to the Moss & Thorn Nursery website to process, validate, and display plant orders stored in server memory.

Features & Implementation Overview
Here is a mapping of where each assessment task is implemented across the project files:

Task 1: Server Setup & Structure (5 Marks)

Static File Serving: Configured via express.static('public') in server.js to deliver static HTML/CSS files located in the /public directory.

Body Parsing: Configured with express.urlencoded() and express.json() middleware in server.js to process incoming form payloads.

Port Configuration: Server starts and listens on port 3000.

Task 2: Order Processing (10 Marks)

POST Route: Handles order creation via POST /api/orders (or direct form submit handling) in server.js.

In-Memory Storage: Stores valid incoming orders in a global server array (orders = []) for the duration of the server session.

Task 3: Page Redirects & Dynamic Feedback (5 Marks)

Validation & Redirects: Validates that required fields (Plant Name and Quantity) are present and valid.

Success Routing: Valid orders redirect to /success.html.

Error Handling: Missing or invalid submissions redirect to /error.html.

Order Details Display: Relevant order details (what was ordered and quantity) are rendered or passed onto the feedback pages.

Task 4: Order Display Page (5 Marks)

Orders View: Accessible via /orders.html (or route /orders).

Memory Listing: Fetches and displays all active session orders stored in server memory, clearly showing each plant name and requested quantity.

Project Structure
Plaintext
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
Prerequisites
Node.js (v14.x or higher recommended)

npm (Node Package Manager)

How to Run the Project Locally
Extract/Clone the files into your working directory.

Install dependencies (opens terminal in project root):

Bash
npm install
Start the Express server:

Bash
node server.js
(Or run npm start if script is configured).

Access the application in your web browser:

Main Order Page: http://localhost:3000/ or http://localhost:3000/index.html

Order History Page: http://localhost:3000/orders.html

Academic Integrity & Citation
This project was completed independently as part of individual assessment requirements for CS551S at the University of Aberdeen.
