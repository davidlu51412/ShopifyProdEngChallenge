# ShopifyProdEngChallenge


# Demo
Here is a demo of the application on youtube (just in case replit goes down or anything goes wrong)
https://youtu.be/V8PM_zKOCs0

# Replit
### Frontend 
Here is the deployed frontend of the replit project: https://shopifyprodengchallenge-1.dl25.repl.co/
* you should only need to utilize this website, however, i've included the backend so u can see the actual query data returned from read methods

### Backend
Here is the deployed backend of the replit project: https://shopifyprodengchallenge.dl25.repl.co/
you can do queries such as:

Lists All items:
* https://shopifyprodengchallenge.dl25.repl.co/api/items

Lists All locations:
* https://shopifyprodengchallenge.dl25.repl.co/api/locations

Lists a Specific Item
* https://shopifyprodengchallenge.dl25.repl.co/api/item/oQb9XJ8zkt1h9RK6ovdX

Note: More Queries can be seen in the frontend/pages/api as examples


# Tutorial

clone repo or use replit

clone it in a location of your choice
`git clone https://github.com/davidlu51412/ShopifyProdEngChallenge.git`


Open a terminal and make sure its at the root (./SHOPIFYPRODENGCHALLENGE)

# BACKEND

For the endpoints/routes, the backend directory contains the index.js file to see the corresponding routes and also the files in the routes subdirectory which contain the specific functions and routes to each inventory item or location

make sure you are in the backend folder
`cd backend`

Make sure to copy the files in this folder into the backend folder
https://drive.google.com/drive/folders/1qoYM5JgK8i1vAEtTU2JVUTGxnFgmlonu?usp=sharing

note that these files are sensitive information and in a real world situation, would not be accessible like this but hidden to the public.

make sure node is on v16.14.0 or greater, check by doing
`node -v`

if your node version is not up to date go to: https://nodejs.org/en/download/

now install the backend dependencies
`npm i`

# FRONTEND

ok now lets open another terminal from the root (./SHOPIFYPRODENGCHALLENGE)

make sure your next js version is v12.1.6 or higher
`npx next --version`

if you do not have nextjs do
`npm install next`

now install the frontend dependencies
`npm i`

OK now we have installed everything and set it up:

now we can run the app:

in your "backend" terminal do:
`npm start`

in your "frontend" terminal do:
`npm run dev`

Now you are ready to go!

Technologies Used:

nextjs, antd, axios, cors, nodemon, firebase-admin, dot-env, openweathermap Weather API, positionstack.com Geolocation API
