# jsEnvironment
Environment for developing with Java Script

##Editor and Configuration
What is important in a code editor is that supports highlight for the language and alternative languages that transpile, autocomplete, parse ES6 imports, automated refactoring (rename, extract, etc)

####Alternatives
- Atom 
- Webstorm
- Brackets
- Sublime text
- Visual Studio Code

####Editorconfig
It is a file tho share a project configuration and that the IDE/Code Editor will follow as a standard among all the project and developers involved on it
http://editorconfig.org/
It is necessary to install a plugin in sublime and create a file with the rules, here are come examples for different projects

##Package Management
It is a method to share code, and an indispensable tool nowadays because it provides an easy way to resolve third party and own dependencies allowing to share the project lightweight and ensuring that it will work

####Alternatives
- Bower
- npm
- jspm
- jam
- volo

####Package Security
retire.js and Node security platform are two ways to check the packages and those have no vulnerability risk for the project; to Use Node Security Platform just run `nsp check` as part of the build, but the recommendation is to run it as part of `npm start` and it will report the vulnerabilities found.

##Development Web Server
It is an easy way to run the application in the development process to test and check everything is alright

####Alternatives
- http-server
- live-server
- express
- budo
- webpack-dev-server
- browsersync

####Share Work In Progress
The ability to share the progress of the application is very important to make demos and test features, even let the client interact with a previous version without the need of deployment, here are some alternatives:

- localtunnel
- ngrok
- surge
- now
