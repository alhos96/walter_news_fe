# Walter News
The software system being produced is called Walter News. It is application that allows customers to read news articles from different sources.

## technologies
This application is developed in HTML5, CSS3 and React.js with tailwind. I have also used following packages among creat-react-app preloads:
  - axios
  - react-router-dom
  - react-redux
  - redux-toolkit
  - luxon

## description and features
The Walter News app will provide following functions and features:

User is able to:
 - see top headlines
 - search news from different sources
 - read news articles
 - filter searched headlines

## starting and using the application

After cloning repository please add your own .env file at the root folder with following variable: 
- **REACT_APP_API_KEY** = "example_of_format" - use API key you can generate on https://newsapi.org/

After that run `npm install` to install all the dependencies. After completing all these steps run `npm start` script. 

That runs the server part of application in the development mode on http://localhost:3000.
