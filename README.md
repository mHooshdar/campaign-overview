# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Used `jest` and `testing-library` for this project.

**Note:** I could not add unit tests for `useRoute` and `snapshot` for the pages because these are not fully compatible with `next`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Structure

## components
In this folder, we have the `components` related to our page

## hooks
In this folder, we have the `hooks` that we are using in the project. For adding `API` hooks with `react-query`, put them in the `hooks/api` folder.

## layout
In this folder, we have the `layout` components. For adding a new `layout` you should add a folder and use it in your `router`

## pages
In this folder, we have the `pages`

## store
In this folder, we have the `redux` (personally do not like redux) reducers and functionalities. We used `redux-toolkit` for handling mutating state and some features that is exported.

## types
We have our `types` and `interfaces` declaration in this folder and it's imported into other components
## utils
In this folder, we have the `utility` functions and also the `axios` instance


## Deploy on Vercel

This project is deployed on `vercel url` with vercel deployment

If you have any further questions or feedback, don't hesitate to contact me

mohammad.hooshdar@gmail.com