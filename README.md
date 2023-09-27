# Todo List App

Let's be real, you know what it is. A normal Todo App that allows a User to create, complete, and delete todos on a list! This app utilizes a user login as well to ensure they're a user of the app to begin with (or you can register to start using) and will fetch all the associated todos this user has.

## Tech

Started by using the Create-React-App.

This app was built using the MERN stack:

- MongoDB
  - To store the User's todos
- Express
  - To simplify the server-side routing sitting on top of Node.js
- React
  - To build the front-end of the app and track the state of the todos
- Node
  - To build the server, along with Express, and allow interactions with the database

**Additional**

- React Router
  - To create a seamless UI and navigation between views
- Firebase Auth
  - Creates Users and authorizes them using email and password
  - Removes security risk of storing their email and passwords inside the database
- Framer-Motion
  - Implement some animations between views
- Formik
  - A React library used to create and manage a `<form>`

### TODOs

- Deploy it (maybe one day)!
  - Will deploy client-side on Netlify
  - Will deploy server-side on Heroku
