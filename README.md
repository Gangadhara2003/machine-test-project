# Machine Test Project

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application that provides user registration, login, and a dashboard to view and manage users.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js and npm:** You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
*   **MongoDB:** You need a MongoDB database. You can either install it locally on your machine or use a cloud-based service like MongoDB Atlas ([https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)).
*   **Git:** You can download it from [https://git-scm.com/](https://git-scm.com/).

## Setup Instructions

1.  **Clone the repository:**
    Open your terminal or command prompt and run the following command to clone the project:
    ```bash
    git clone <repository-url>
    ```
    Replace `<repository-url>` with the actual URL of the repository.

2.  **Backend Setup (Server):**
    a.  Navigate to the `server` directory:
        ```bash
        cd machine-test/server
        ```
    b.  Create a `.env` file in the `server` directory. This file will hold your environment variables.
    c.  Add the following variables to your `.env` file:
        ```
        MONGO_URI=<your-mongodb-connection-string>
        JWT_SECRET=<your-jwt-secret>
        ```
        *   Replace `<your-mongodb-connection-string>` with your actual MongoDB connection string.
        *   Replace `<your-jwt-secret>` with a long, random, and secret string used for signing JSON Web Tokens.
    d.  Install the server's dependencies:
        ```bash
        npm install
        ```
    e.  Start the backend server:
        ```bash
        npm start
        ```
        The server should now be running on `http://localhost:5000`.

3.  **Frontend Setup (Client):**
    a.  Open a **new** terminal or command prompt.
    b.  Navigate to the `client` directory:
        ```bash
        cd machine-test/client
        ```
    c.  Install the client's dependencies:
        ```bash
        npm install
        ```
    d.  Start the frontend development server:
        ```bash
        npm run dev
        ```
        The client application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

4.  **Access the application:**
    Open your web browser and go to the address provided by the `npm run dev` command (usually `http://localhost:5173`) to use the application.
