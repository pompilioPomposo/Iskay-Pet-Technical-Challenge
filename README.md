# IskayPet Technical Challenge

## Project Overview

This project is a technical challenge completed as part of a job interview, with the designs provided in Figma. The application is a React-based todo list manager with various features, including form validation, API fetching, pagination, and a styled user interface using Chakra UI. The intention being to show my capabilities in modern React development practices, state management, and integration of third-party libraries and APIs.

I first started up the project using create-react-app to get everything up and running faster, not realizing it is now deprecated. What a mess!

## Features

- **Todo List Management**: Add, view, and delete todos.
- **Form Validation**: Ensures that todos have valid names and descriptions.
- **API Integration**: Fetches initial todos from `https://jsonplaceholder.typicode.com/todos/`.
- **Pagination**: Handles multiple pages of todos.
- **Responsive Design**: Styled using Chakra UI to ensure a consistent look and feel across devices.
- **Error Handling**: Displays messages for different error scenarios.

## Project Structure

The project is organized as follows:

- **src**
  - **components**: Contains all the React components used in the project.
    - `NavHeader.jsx`
    - `Pagination.jsx`
    - `PersonalDataForm.jsx`
    - `ToDo.jsx`
    - `TodoFormModal.jsx`
  - **icons**: SVG icons used in the project.
  - **pages**: Different pages of the application.
    - `MyBestFriends.jsx`
    - `MyComms.jsx`
    - `MyData.jsx`
    - `MyReturns.jsx`
    - `MyTodos.jsx`
  - **services**: Contains the service functions for API interactions.
    - `todoService.js`
  - **styles**: Style files for various components.
    - `MyTodosStyles.js`
    - `NavHeaderStyles.js`
    - `PersonalDataStyles.js`
    - `ToDoStyles.js`
  - `App.jsx`: Main application component.
  - `AppContext.js`: Context for managing global state.
  - `index.js`: Entry point of the application.
  - `theme.js`: Custom theme configurations for Chakra UI.
- **public**: Public assets and configuration files.
- **tests**: Test files for the project.
  - `App.test.js`: Basic test to check if the app renders correctly.

## Getting Started

### Prerequisites

- Node.js (version 20.0.0 or higher)
- npm (version 7.0.0 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pompilioPomposo/Iskay-Pet-Technical-Challenge.git
   cd Iskay-Pet-Technical-Challenge
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Running the Application

   To start the development server, run:

   ```bash
   npm start
   ```

   The application will be available at http://localhost:3000.

4. Running Tests

   To run tests, use:

   ```bash
   npm test
   ```

## Continuous Integration

The project uses GitHub Actions for continuous integration. The configuration is located in .github/workflows/ci.yml. The CI pipeline includes steps for installing dependencies, running tests, and checking for errors. This is actually the first time I use CI/CD pipelines, learning it just for the purposes of the challenge.

Author: Mauro Montero
