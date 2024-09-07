Angular User Authentication Application

Overview
This Angular application provides a user authentication system with sign-in and sign-up functionality. The application allows users to log in or sign up, with validation for email/phone numbers and passwords. It also includes a multi-step sign-up process with validation and data persistence between steps.

Table of Contents

Features
Installation
Folder Structure
Configuration
Running the Application
Usage
Troubleshooting
Contributing


Features- 

Sign In/Log In: Users can log in using their email/phone number and password.
Sign Up: Users can sign up with an email/phone number, name, and password. The sign-up process is split into two steps:
Step 1: Enter basic information (name, email/phone, password).
Step 2: Complete additional details (organization name, designation, birth date, city, pincode).
Validation: Form fields are validated, including email/phone format, password strength, and pincode format.
Persistence: Data entered in multi-step forms persists when navigating between steps.
Responsive Design: The application is styled to be responsive on both desktop and mobile devices.
Installation
To set up this project on your local machine, follow these steps:

Clone the Repository

bash
Copy code
git clone https://github.com/your-repository-url.git
Navigate to Project Directory

bash
Copy code
cd your-project-folder
Install Dependencies

Ensure you have Node.js and npm installed. Then install the project dependencies:

bash
Copy code
npm install
Install Angular CLI Globally

If you don’t have Angular CLI installed, install it globally:

bash

npm install -g @angular/cli
Folder Structure
Here is an overview of the project folder structure:


src/
  app/
    auth/
      login/
        login.component.ts
        login.component.html
        login.component.css
      signup/
        signup.component.ts
        signup.component.html
        signup.component.css
    shared/
      services/
        mock-data.service.ts
    app-routing.module.ts
    app.module.ts
  assets/
  environments/
  index.html
  main.ts
  styles.css
  angular.json
  package.json
  tsconfig.json

auth/: Contains components related to authentication (login and sign-up).
shared/services/: Contains services like MockDataService for handling mock data.
app-routing.module.ts: Manages the routing configuration.
app.module.ts: The main module file where components and services are declared.

Configuration
Mock Data Service
The MockDataService provides mock data for user validation and form fields. Ensure that it returns the expected structure for your application.

Routing
The application uses Angular's Router to navigate between components. Routes are configured in app-routing.module.ts.

Running the Application

Start the Angular Development Server

Run the following command to start the development server:

bash

ng serve
Open in Browser

Open your browser and navigate to http://localhost:4200 to view the application.

Usage
Sign In: Enter your email/phone number and password to log in.
Sign Up: Enter your email/phone number, name, and create a password. Follow the steps to complete the additional fields.

Troubleshooting
ng Command Not Recognized: Ensure Angular CLI is installed globally and that your PATH environment variable includes npm’s global bin directory. Refer to the Angular CLI installation guide for more details.

Module Not Found Errors: Check your file paths and ensure that components and services are correctly imported and declared.

Contributing

Feel free to contribute to this project by submitting issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.