# Working Hours Web App (Express)

A simple Express web application with **three pages**:
- **Home**
- **Our Services**
- **Contact Us**

It includes a **custom middleware** that allows access **only during working hours**:
- **Monday to Friday**
- **09:00 to 17:00** (Africa/Nairobi)

Outside these hours, users see a **“Closed”** page.

---

## Features

- ✅ Express server with routes: `/`, `/services`, `/contact`
- ✅ Navbar on every page (Home | Our Services | Contact Us)
- ✅ Custom middleware to restrict access to working hours
- ✅ Styled using plain CSS
- ✅ Uses EJS template engine (optional requirement satisfied)

---

## Tech Stack

- **Node.js**
- **Express**
- **EJS** (template engine)
- **Luxon** (timezone-safe date/time)
- **CSS** (static styling)

---

## Project Structure

```txt
expressjs-app/
├─ server.js
├─ package.json
├─ middleware/
│  └─ workingHours.js
├─ public/
│  └─ styles.css
└─ views/
   ├─ partials/
   │  └─ navbar.ejs
   ├─ home.ejs
   ├─ services.ejs
   ├─ contact.ejs
   └─ closed.ejs


Setup & Installation
1) Clone / Create project folder
mkdir expressjs-app
cd expressjs-app

2) Install dependencies
npm install express ejs luxon

3) Install dev dependency (optional but recommended)
npm install -D nodemon

Running the App
Development mode (nodemon)
npm run dev

Production mode
npm start


Server will run on:

http://localhost:3000

Available Routes
Route	Page
/	Home
/services	Our Services
/contact	Contact Us
Working Hours Middleware

The middleware checks:

Day is Mon–Fri

Time is between 09:00 and 17:00 (Africa/Nairobi)

If outside working hours, it returns a 403 and renders the closed.ejs page.

File: middleware/workingHours.js

Styling

CSS is served from:

public/styles.css

Express serves static assets via:

app.use(express.static("public"));

Notes / Tips

If you get errors related to time checks, ensure Luxon is installed:

npm i luxon


To restart nodemon quickly:

Press rs in the terminal running nodemon

Author

Created by Nelson Ngumo for an Express.js checkpoint.