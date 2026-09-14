# CS551S: Web Development

## Assessment 2: Individual Coursework (no group work)

This part of the assessment contributes 25% of the overall mark for the module. Marks for individual questions and items appear in the specification below.

---

## Learning Outcomes

This assessment, through its various tasks, has the following learning outcomes:

* Understanding of server-side web frameworks through implementing a Node.js/Express application
* Ability to create and structure a basic web application with both frontend and backend components
* Capability to implement data handling and validation in a web application context
* Skills in organising and connecting different parts of a web application to create a functioning system

---

## Plagiarism and Collusion

This is an individual assessment, not a team-based one; its purpose is to assess your knowledge, not your ability to find answers on the Internet. Submissions may be checked for similarity and investigated if there is evidence of collusion (i.e., students using materials from one another). You must appropriately cite all materials you have used in your work. Plagiarism and collusion are serious issues and will not be tolerated.

It is your responsibility to familiarise yourself with the University's code of practice on Student Discipline: [https://tinyurl.com/y92xgkq6](https://tinyurl.com/y92xgkq6)
Please also read the following information provided by the university: [https://www.abdn.ac.uk/sls/online-resources/avoiding-plagiarism/](https://www.abdn.ac.uk/sls/online-resources/avoiding-plagiarism/)

---

## Programming Assignment (in the lab class)

**Duration:** 1 hr 30 mins

### Plant Nursery Website: Adding Order Functionality

**Overview**

Moss and Thorn Nursery has a simple website that only shows shop details. Your task is to bring it to life by adding a Node.js and Express backend that accepts and stores plant orders submitted from the site's order form.

---

## Task 1: Server Setup and Structure (5 marks)

Set up the Express server and organise the project.

* Project files are in a sensible structure with a `public` folder (1 mark)
* Express serves static assets from the `public` folder (1 mark)
* Server is configured to parse JSON request bodies (2 marks)
* Server starts and listens on port `3000` (1 mark)

---

## Task 2: Order Processing (10 marks)

Build the core order workflow.

* `POST` route correctly accepts form submission data (3 marks)
* Orders are appended to an in-memory array on the server (3 marks)
* Valid submissions redirect to a success page (2 marks)
* The server keeps the array of orders for the duration of the session (2 marks)

---

## Task 3: Page Redirects (5 marks)

Route users to the right page based on the result.

* Successful submissions redirect to `success.html` (1 mark)
* Invalid submissions redirect to `error.html`, such as when any required field is missing(2 marks)
* Redirected pages show relevant information about the attempted order, for example what was ordered and how many (2 marks)

---

## Task 4: Order Display Page (5 marks)

Create a page to review all orders placed during the session.

* New route serves an `orders.html` page (1 mark)
* Page lists all orders stored in server memory (2 marks)
* Each entry clearly shows the plant name and the quantity requested (2 marks)

---

## Materials Provided

* `index.html` containing the order form
* `style.css` for site styling

---

## Required Order Data

Each order must include:

* Plant Name
* Quantity

---

## Marking Methodology

Your solution will be tested by:

1. Verifying correct project structure
2. Accessing the website through the Express server
3. Submitting test orders through the form
4. Checking orders are stored in server memory
5. Testing validation with invalid orders

Each component must be fully functional for full marks.

---

## Submission Instructions

Submit a **.zip** on MyAberdeen with all of your code and an optional short `README.md` that explains how to open the page and where each task has been implemented.