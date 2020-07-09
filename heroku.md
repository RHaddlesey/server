Dynamic port binding
const PORT = process.env.PORT || 5000;
// if on Heroku, find and use their port || or in dev use 5000
app.listen(PORT);


specifiy node environment
tell Heroku what node version we want to use. Inside package.json
"engines": {
    "node": "8.1.1",
    "npm": "5.0.3"
  },

specify a start script
tell Heroku how to start our server - package.json
"scripts": {
    "start": "node index.js"
  },

create .gitignore (or edit)
node_modules

git push heroku master - deploy latest build
