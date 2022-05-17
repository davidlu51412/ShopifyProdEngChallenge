# ShopifyProdEngChallenge


# Demo
Here is a demo of the application on youtube (just in case replit goes down or anything goes wrong)
https://youtu.be/V8PM_zKOCs0

# Replit Setup 

The setup of "waking up" the backend and frontend should take no longer than 5 min.

### 1. Backend
Here is the deployed backend of the replit project: https://shopifyprodengchallenge.dl25.repl.co/
Make sure you click the backend link first since replit requires the site to "wake up". Once the website loads (it will show 'Cannot GET /') then click the frontend link

you can do queries such as:

Lists All items:
* https://shopifyprodengchallenge.dl25.repl.co/api/items

Lists All locations:
* https://shopifyprodengchallenge.dl25.repl.co/api/locations

Lists a Specific Item
* https://shopifyprodengchallenge.dl25.repl.co/api/item/oQb9XJ8zkt1h9RK6ovdX


### 2. Frontend 
Here is the deployed frontend of the replit project: https://shopifyprodengchallenge-1.dl25.repl.co/
Please click this link after the backend replit has loaded.

* this is the main bulk of the app, however, i've also included the backend so u can see the actual query data returned from read methods
* Note that it if the replit has not been accessed recently it takes some time for the Replit hosting to "wake up" so that you are able to access it and it will show a loading screen before the application is redeployed


Note: More Queries can be seen in the frontend/pages/api as examples

### NOTE: If it takes too long to load
* go to this link https://replit.com/join/kzzkqvjleh-dl25 and then click run
* then go to this link https://replit.com/join/ruxbnonqme-dl25 and then click run


# LOCALHOST Tutorial


### 1. Clone Repo

clone it in a location of your choice
`git clone https://github.com/davidlu51412/ShopifyProdEngChallenge.git`


Open a terminal and make sure its at the root (./SHOPIFYPRODENGCHALLENGE)

### 2. BACKEND

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

### 3. FRONTEND

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

# Technologies Used:

nextjs, antd, axios, cors, nodemon, firebase-admin, dot-env, openweathermap Weather API, positionstack.com Geolocation API
