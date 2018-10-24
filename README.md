# About The Funny Gif project

The demo project (Funny Gif) function is to recommend funny Giphy gif images to its audiences.

The demo project (funny gif) shows that I am able to program with next.js (a very lightweight boilerplate built on top of React.js ), Redux, Redux Saga component, Bootstrap 4 and so on, etc.

- It uses next.js in the backend to access Giphy.com public APIs to pull the list of images and prints it as a list of bootstrap cards on the front page.
- It uses Redux to store image with titles. It uses Redux saga to do the background update to make the images (cards) change automatically every 5 seconds.
- It uses bootstrap 4 to handle the card and layouts.
- It uses knex + postgresql to save data.



# Installation


1. Clone git repo locally, then

    ```
    cd nextjs-demo
    make install
    make up
    ```

2. Profit! You can open the application on `http://app.docker.localhost`.

# What's included?

1. Local development environment based on docker.
2. Set of make commands for faster local development.
3. `Eslint` support.
4. Configured `Next.js` application.
5. `Scss` framework with ability to put `.scss` files per component.
6. Live reload for all `js` / `css` changes.
7. `Redux` (with devtools) + `Redux Saga` configured.
8. Basic `robots.txt`.
9. Beautiful animation for pages transition.

# Command list

- `make install` - installs the whole application locally.
- `make up` - runs the application in console debug mode.
- `make stop` - pauses the application.
- `make down` - completely stops the application and removes docker containers.
- `make restart` - restarts the application containers.
- `make lint` - checks coding standards and fixes issues if possible.
