# jsEnvironment
Environment for developing with Java Script

## Editor and Configuration
What is important in a code editor is that supports highlight for the language and alternative languages that transpile, autocomplete, parse ES6 imports, automated refactoring (rename, extract, etc)

#### Alternatives
- Atom 
- Webstorm
- Brackets
- Sublime text
- Visual Studio Code

#### Editorconfig
It is a file tho share a project configuration and that the IDE/Code Editor will follow as a standard among all the project and developers involved on it
http://editorconfig.org/
It is necessary to install a plugin in sublime and create a file with the rules, here are come examples for different projects

## Package Management
It is a method to share code, and an indispensable tool nowadays because it provides an easy way to resolve third party and own dependencies allowing to share the project lightweight and ensuring that it will work

#### Alternatives
- Bower
- npm
- jspm
- jam
- volo

#### Package Security
retire.js and Node security platform are two ways to check the packages and those have no vulnerability risk for the project; to Use Node Security Platform just run `nsp check` as part of the build, but the recommendation is to run it as part of `npm start` and it will report the vulnerabilities found.

## Development Web Server
It is an easy way to run the application in the development process to test and check everything is alright

#### Alternatives
- http-server
- live-server
- express
- budo
- webpack-dev-server
- browsersync

#### Share Work In Progress
The ability to share the progress of the application is very important to make demos and test features, even let the client interact with a previous version without the need of deployment, here are some alternatives:

#### Alternatives
- localtunnel
- ngrok
- surge
- now

## Automation
It is very important for the developers due to that there are many commands ans tools, so automating a process can save time and prevent errors.

#### Alternatives
- Grunt
- Gulp
- npm

npm script is a great choice, because you jave the power of javascript and all the packages from npm, to use them just add some scripts in the package.json file

#### NpmRunAll
is a package that allows to run different commands at the same time
in parallel

## Transpiling
It is the way to code with one version of javascript or a related language and convert the code to a javascript version that all the browsers understand

Note: ES2016 has only 2 new features, exponent operator and array.prototype.includes

#### Alternatives
https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS
- Babel
- TypeScript
- Elm 

Babel and Typescript are are huge alternatives, typescript offers datatype validation and babel offers new features from the new versions od ESx.
It is recomended to use the .babelrc file

## Bundling
It is the way for the applocation to organize and manage the source files like js and css even images and so on and put it all in a file for the application to load faster and safer.

#### Alternatives
- RequireJS
- Browserify
- Webpack
- Rollup
- JSPM

## Bundle
It's the way to use javascript modules and create a final file that us capable to run in a browser, and even have different files that are together related that will make the app run in the browser.

#### Module formats
- IIFE
- AMD
- CommonJS
- UMD
- ES6 Modules

ES2015 Modules should be the one to select because it is the standard

#### Sourcemaps
It is a feature that allows the developer to see the sourcecode (only when the developer tools is apened)of an application which sources have been minified and uglified and in this case put in a bundle with webpack

### Linting
Is the way to catch error and typos at the moment of coding or before building the project, also follow the code standars for the language and the project. Enforce consistency and avoid mistakes

#### Alternatives
- JSLint
- JSHint
- ESLint (eslint-watch: can check the code after save)

Tree shaking is important because it eliminates code that is not used
So Webpack2 is a good choice.

