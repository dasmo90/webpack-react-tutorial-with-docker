# Webpack React Tutorial with Docker

Run all given command in project's root folder.

## (1) Start Development Server

Follow this steps to start the local development server.

1. Build image with `docker-compose build`
2. Start server with `docker-compose up`
3. Open browser using `open http://localhost:8000`
4. To stop the server run `docker-compose stop`
## (2) Fetch Node Modules Folder

You may need a local copy of the `node_modules` folder for development. With the following command, 
you can copy it to your host.

1. Start the development server as described in (1) by following steps 1. and 2.
2. Run `docker cp webpack-react-tutorial:/development/node_modules node_modules`
