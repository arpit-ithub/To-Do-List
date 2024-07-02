# To-Do-List
Assignment using React-Redux

## Description
This is a To-Do application using ReactJS allowing user :
- To add the task, view it, delete it,
- Can mark or unmark as a task complete, user can mark all the task with one button,
- individual toggle button to mark the task as completed or not.
- User can search for particular task in search bar.

This application also using Tailwind for CSS, JSX, React components, hooks and Redux.


## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/arpit-ithub/To-Do-List.git

2. Project directory:
    cd .\To-Do-List\to-do-app\

3. Install dependencies:

   a. For Tailwind:
        npm install -D tailwindcss
        npx tailwindcss init

         tailwind.config.js

            /** @type {import('tailwindcss').Config} */
            module.exports = {
              content: [
                "./src/**/*.{js,jsx,ts,tsx}",
              ],
              theme: {
                extend: {},
              },
              plugins: [],
            }

       index.css:
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

    b. For React Icons:
         npm install react-icons --save

    c. For Redux:
         npm install redux react-redux @reduxjs/toolkit

4. To run the application, use the following command:
    npm start

Contributions are welcome! Please fork the repository and create a pull request.
