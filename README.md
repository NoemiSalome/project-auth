# Bootcamp-Project #17: Project Auth
This project's goal was about buiding and API with authentication in order to implement a registration and login flow interface. This project was realized in a pair-programming setup. 

## Learning content and lessons learned:
We learned how to authenticate users using tokens and how to store passwords in databases in a secure way. We also created a Frontend with a form to register, sign in and be able to see restricted content in case the login was successful.

We used MongodB and Mongoose to build our Backend Express API.
The Frontend was built using a combination of React/Redux and local states in order to control the login/signup flow.

## Endpoints are:
- A POST endpoint to create a new user
- A POST endpoint for the existing users to log in
- A GET restricted endpoint which is the home of the restricted site's content. It uses an authentication middleware, so it's only accessible with a valid access token.


## View it live
Frontend: https://project-auth-week20.netlify.app/
Backend: https://project-auth-week20.herokuapp.com/