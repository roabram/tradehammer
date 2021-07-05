# tradeHammer README

First, install dependencies:

```
npm install
```

In the project directory, you can then run:

```
npm run build
```

Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

```
npm start
```

Runs the server in production mode and serve production bundle from npm run build

```
npm run server:dev
```

Runs the server in development mode.

```
npm run client:dev
```

Runs the app in development mode.

Open http://localhost:3000 (default PORT) to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

## .env

You have to create a .env file inside the main folder.

The .env looks like:

```
PORT=
API_KEY=
MONGO_URL=
```

PORT is for your backend.
API_KEY is from https://financialmodelingprep.com/
