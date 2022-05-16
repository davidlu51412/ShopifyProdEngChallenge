# ShopifyProdEngChallenge

Here is a demo of the application on youtube:
https://youtu.be/V8PM_zKOCs0

clone repo or use replit

clone it in a location of your choice
`git clone https://github.com/davidlu51412/ShopifyProdEngChallenge.git`
or use the replit project(replit is very slow compared to the localhosting): https://replit.com/join/kzzkqvjleh-dl25

Open a terminal and make sure its at the root (./SHOPIFYPRODENGCHALLENGE)

BACKEND:
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

FRONTEND:
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
