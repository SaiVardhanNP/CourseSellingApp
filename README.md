# CourseSellingApp Backend

## Overview
This is the backend for the CourseSellingApp, a platform designed to facilitate the sale and management of online courses. The backend is built using Node.js, Express.js, and MongoDB, handling API requests, database interactions, and user authentication. The frontend is not yet implemented, but this backend is designed to work with a future frontend (e.g., React-based) for seamless course management and purchasing.

## Features
- **Course Management**: APIs for creating, updating, deleting, and retrieving course details.
- **User Authentication**: Secure user signup, login, and logout using JSON Web Tokens (JWT).
- **Admin Dashboard**: Endpoints for administrators to manage courses and user data.
- **Course Purchase**: Handles course purchasing logic and user course enrollment.
- **Database**: MongoDB for storing user and course data efficiently.

## Tech Stack
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing course and user data.
- **JWT**: For secure authentication and authorization.
- **Mongoose**: ODM for MongoDB to manage database schemas.

## Prerequisites
Before running the backend, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm (Node Package Manager)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SaiVardhanNP/CourseSellingApp.git
   cd CourseSellingApp/backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Run the Backend**:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:5000` (or the port specified in `.env`).

## API Endpoints
### Authentication
- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a JWT token.
- **POST /api/auth/logout**: Log out a user (client-side token removal).

### Courses
- **GET /api/courses**: Retrieve all available courses.
- **GET /api/courses/:id**: Retrieve details of a specific course.
- **POST /api/courses**: Create a new course (admin only).
- **PUT /api/courses/:id**: Update a course (admin only).
- **DELETE /api/courses/:id**: Delete a course (admin only).

### User
- **GET /api/users/me**: Get authenticated user's details.
- **POST /api/users/purchase/:courseId**: Purchase a course.
- **GET /api/users/courses**: Get enrolled courses for the authenticated user.

## Project Structure
```
backend/
├── config/          # Configuration files (e.g., database connection)
├── controllers/    # Request handlers for API endpoints
├── middleware/     # Authentication and error-handling middleware
├── models/         # Mongoose schemas for User, Course, etc.
├── routes/         # Express route definitions
├── .env            # Environment variables
├── index.js        # Entry point for the backend
└── package.json    # Dependencies and scripts
```

## Usage
1. **Start MongoDB**: Ensure your MongoDB instance is running (local or cloud).
2. **Run the Server**: Use `npm start` to launch the backend.
3. **Test APIs**: Use tools like Postman or cURL to test the API endpoints, as the frontend is not yet implemented.
4. **Future Frontend Integration**: The backend is designed to work with a frontend (e.g., React) that will make requests to `http://localhost:5000`. Update the frontend's API base URL to match the backend's port when implemented.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Built as part of a full-stack development project.
- Thanks to the open-source community for providing tools and libraries used in this project.
- Note: The frontend is planned for future development to complete the full-stack application.
