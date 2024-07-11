# NomadNx - Travel Tour

Welcome to NomadNx !!

## Overview

This repository implements Firebase authentication for user registration and login with email verification. It includes both frontend and backend codes for a complete implementation.

## Features

- **User Authentication**: Implements user registration and login using Firebase Authentication.
- **Email Verification**: Sends email verification links and ensures only verified users can log in.
- **Token Management**: Handles authentication tokens and simulates sending them to a mock backend endpoint.
- **UI Design**: Features a beautiful and user-friendly UI built with React and Material-UI.

## Repository Structure

- `frontend/`: Contains the frontend code built with Vite and React.
- `backend/`: Includes the backend code implemented with Spring Boot, handling token verification and secure API endpoints.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ->  git clone [https://github.com/Xerox563/nomadnx.git](https://github.com/Xerox563/NomadNx.git)
  
2. cd frontend
3. npm install
4. npm run dev
5. Open other terminal
   -> To verify the mock endpoint
      -> command -> npm run mock-server

***************************************** Features *****************************************************
# Firebase Authentication Integration

## Objective
Implement Firebase authentication on both the frontend and backend. The backend should receive and verify the authentication token from the frontend, ensure the token is valid, and that the user's email is verified before allowing access to secure endpoints.

### Frontend Implementation

## Setup Firebase
- Created a Firebase project.
- Set up Firebase Authentication with email/password.
- Installed Firebase SDK in your React app.

## Implement Authentication
- Created a simple registration and login form using React components.
- Used Firebase to handle user registration and login.
- Stored the authentication token upon successful login.

## Email Verification
- Implemented sending an email verification link after user registration.
- Ensured that only users with verified emails can log in.

## Send Token to Backend
- Simulated sending the authentication token to a backend endpoint (mock endpoint).

## Protected Routes
- Implemented protected routes using React Router.
- Redirected users to the login page if they are not authenticated.

## Additional Notes
- Customized UI elements and user flows for a seamless experience.
- Handled edge cases such as password reset and error handling in authentication flows.
    
## Resources
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Firebase React SDK](https://www.npmjs.com/package/firebase)
  

### Backend Implementation (Utilized Nodejs and Express)

#### Setup Spring Boot
1. Impleented a Backened:Part using nodejs and expressjs.
2. Initialized Firebase Admin SDK** using project credentials (`serviceAccountKey.json`) to authenticate with Firebase.

#### Token Verification
1. Implemented a **token verification filter** to intercept API requests.
2. Extracted the authentication token from request headers for validation.
3. Verified the token's validity and ensured email verification using Firebase Admin SDK.

#### Secure API Endpoints
1. **Secured specific API endpoints** to restrict access based on:
   - Validity of the Firebase authentication token.
   - Verification of the user's email through Firebase.

2. Implemented logic to return appropriate responses based on the token validation status.

********************************************************************************************************

#### Additional Notes

1. **Future Enhancements**: Consider implementing additional Firebase features like Firestore for data storage or Firebase Cloud Messaging for notifications.

2. **Compliance**: Ensure compliance with data protection regulations (e.g., GDPR) when handling user authentication and sensitive data.

3. **Contributing**: Contributions and feedback are welcome! Feel free to fork the repository, submit pull requests, or open issues for any improvements or issues encountered.

4. **Acknowledgments**: Acknowledge any third-party libraries, resources, or tools used in your implementation.

4. **License**: This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

   
