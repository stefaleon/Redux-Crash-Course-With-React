## [Redux Crash Course With React](https://www.youtube.com/watch?v=93p3LxR9xfM&t=254s)
#### by [Brad Traversy](https://www.traversymedia.com)

&nbsp;
#### React App Boilerplate

* Instead of *Create React App*, I use the boilerplate from  

### [React & Webpack 4 From Scratch - No CLI](https://www.youtube.com/watch?v=deyxI-6C2u4)


&nbsp;
#### Build to *docs* folder instead of *dist* and deploy on Github

* In *webpack.config.js* the output path points at the *docs* folder (instead of *dist*)
* The *docs* folder is then being used to have the result deployed to the Github Pages


&nbsp;
#### Start & Build

*  `$ npm start` starts *webpack-dev-server* for development.

*  `$ npm run build` creates the *docs* folder which contains a build for the app that can be used autonomously in production.
