----------------------------- basic porject setup ------------------------------

-------------------------------- I webpack I -----------------------------------

1. Initialize npm:          npm init -y -> package.json
2. install webpack:         
    - npm install webpack webpack-cli --save-dev
    - npm install webpack
    - npm install --save-dev style-loader css-loader
    - npm install --save-dev webpack-dev-server
3. create gitignnore file:  touch .gitignnore
    - node_modules/
4. create webpack config:   touch webpack.config.js
    - copy template from last project
5. create src folder:       mkdir src
    - webpack uses the src folder as entry point
6. create src/index.js:     touch index.js
7. create dist folder:      mkdir dist
    - webpack will create bundle in this folder
8. Setting up HtmlWebpackPlugin:    npm install --save-dev html-webpack-plugin
    - change title for html
9. create src/template.html -> change title
10. configure package.json
11. use watch mode:         npm run watch
12. start server:           npm run start
13. create styles.css:      touch styles.css

---------------------------------- II ESLint and Prettier II -------------------
1. initialize:              npm init @eslint/config
    - answer questions
2. create .eslintignore:    touch .eslintignore 
    - check last project
3. npm install --save-dev eslint-config-prettier
??????3. add script to package.json:  "lint": "eslint . --ext .ts"

