# Welcome to the exam!

## Introduction

This exam requires you to build a web application using ReactJS, TypeScript, and TailwindCSS. The goal of the application is to display a list of users in cards and provide the ability to view more details about each user. This includes user details, albums and to-do list.

The application will start by displaying a list of users in cards. When a user card is clicked, a page with a navigation bar will be rendered that contains links to view the user's details, albums, and to-do list. The user details section will display information about the user, including their name, email, and other relevant information. The albums section will display a list of albums associated with the user, and you can click on each album to view more photos. The to-do section will display a simple list of to-do items, indicating whether they have been completed or not.


## Endpoints

In this exam, you will be working with the following endpoints:
- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/albums
- https://jsonplaceholder.typicode.com/photos
- https://jsonplaceholder.typicode.com/todos

Note that some endpoints can be filtered based on userId or albumId. This is because each photo belongs to an album and each album belongs to a user. For example, you can retrieve the photos of a specific user by calling the /photos endpoint with userId=number as a query parameter.

Think about how you can use this feature to retrieve the data you need for your application. Hints will be provided through comments in the code to help you along the way.


## Interfaces

Interfaces are provided and must be used in your implementation.
You can find them in ***interfaces*** folder


## Context

There will be a UserContext - useContext hook, that will contain user data. The UserContext will be used to share data between components.

## Usage

To run the application, after unzipping the folder run the following commands:
**npm install**
#
**npm start**

The application should now be running on http://localhost:3000.

## Evaluation

The following aspects will be evaluated in your implementation:

- Code quality and maintainability.
- Correct usage of ReactJS, TypeScript, and TailwindCSS.
- Correct implementation of the interfaces and components.
- User experience and overall design of the application, including usability and accessibility.
- Proper error handling and validation.

Remember to focus on writing clean, well-structured, and maintainable code.

## Project Structure

The project contains a demo folder that contains screenshots of how the application will look like. Feel free to use your imagination and creativity to add more features and improve the overall user experience. The codebase contains comments as hints to help you understand the tasks and requirements.

## Submission

Once you have completed the exam, you should delete the node_modules folder and zip the entire project. Upload the zipped project to Moodle.
Best of luck!

## Images of application

*Note: You can find these images inside demo folder in root*

#### Homepage
![Homepage](/images/Homepage.png)
#### User
![User](/images/User.png)
#### Album
![Album](/images/Albums.png)
#### Photos
![Photos](/images/Photos.png)
#### Todo
![Todo](/images/Todos.png)

