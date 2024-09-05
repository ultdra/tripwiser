# Project Overview

This app aims to be able to help coordinate and handle a group's finances when planning a trip.

Users can create groups to add their friends into it, set a budget, add/read/remove/update transaction records. 
Potentially, we will also have breakdown cost of the trip to be implemented when required.

# Tech stack used

List of tech stack used:
1) Axios
2) Express
3) Google-auth-library
4) Helmet
5) Passport
6) Postgres
7) Sequelie

# Items implemented so far

Project is still in the early phase of development and this list will be updated as more items are implemented

1) Google OAuth2 validation with passport.js
2) POSTGres (Local support)
3) CRUD (The layout and structure of the different routers are in place, ready to implement the rest of the endpoints for the client)

# Things to look into and implement 

Security: We need to handle security at the header level. 
Unit testing: Using Jest and AAA methodology to set up unit testing for the respective calls
CI/CD: Setting up CICD pipelines. Possible ones are AWS ELB and deploy to EC2. Possibly kubernetes (To find out more about this)
