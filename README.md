# Library Management Application

A full-stack application to manage a library's book inventory. The front-end is built with React using Vite as the bundler, leveraging React Router for navigation and the useRef hook for form interactions. The back-end is built with Java, utilizing OOP principles like abstraction and encapsulation to handle book data.

## Features
- **Front-End (React)**:
  - Navigate between Home (book list), Add Book, and Edit Book pages using React Router.
  - Add and edit books with a form that auto-focuses on the title input using useRef.
  - Display a list of books fetched from the back-end with conditional rendering for success/error messages.
- **Back-End (Java)**:
  - Manage book data (title, author, ISBN) with a `Book` class using encapsulation and access modifiers.
  - Abstract book operations with an interface or abstract class.
  - Expose simple REST-like endpoints (e.g., GET /books, POST /books) for the front-end to interact with.

## Project Structure

library-management/
├── react-frontend/   # React front-end (Vite)
│   ├── src/          # React source files
│   ├── public/       # Static assets
│   ├── dist/         # Vite build output
│   └── package.json  # Front-end dependencies
├── backend/          # Java back-end
│   ├── src/          # Java source files
│   └── pom.xml       # Maven configuration (if using Maven)
├── README.md         # Project documentation
└── .gitignore        # Git ignore rules

## Prerequisites
- **Node.js** and **npm** (for the React front-end with Vite)
- **Java JDK** (for the Java back-end)
- **Maven** or **Gradle** (optional, for Java dependency management)
- A browser for testing the front-end
- Postman (optional, for testing back-end APIs)

## Setup Instructions

### Back-End (Java)
1. Navigate to the `backend/` directory:
   ```bash
   cd backend

If using Maven, ensure pom.xml includes necessary dependencies (e.g., Spring Boot or a simple server framework).

Compile and run the Java application:
bash

mvn clean install
mvn exec:java -Dexec.mainClass="com.example.Main"

(Adjust the main class name based on your setup.)

Verify the server is running on http://localhost:8080.

Front-End (React with Vite)
Navigate to the react-frontend/ directory:
bash

cd react-frontend

Install dependencies:
bash

npm install

Start the Vite development server:
bash

npm run dev

Open http://localhost:5173 in your browser to view the app (Vite uses port 5173 by default; check your terminal output to confirm).

Integration
Ensure the React front-end is configured to call the Java back-end (e.g., update API URLs in your fetch requests to http://localhost:8080/books).

Usage
Start the back-end server first.

Start the front-end development server.

Navigate to the homepage to view the book list.

Use the "Add Book" page to create a new book entry.

Click a book to edit its details on the "Edit Book" page.

Challenges Addressed
Built a React app with navigation (React Router) and dynamic form handling (useRef) using Vite.

Created a Java back-end with OOP principles (abstraction, encapsulation, access modifiers).

Future Improvements
Add a database (e.g., SQLite or MySQL) to persist book data.

Implement user authentication.

Enhance styling with a CSS framework like Tailwind CSS.

