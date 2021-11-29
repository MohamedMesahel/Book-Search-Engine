<div id="top"></div>

<!-- Badges -->
[![Website shields.io](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](http://shields.io/)
[![Website shields.io](https://badges.aleen42.com/src/javascript.svg)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/LICENSE-MIT-green)](http://shields.io/)
[![Website shields.io](https://badges.aleen42.com/src/node.svg)](http://shields.io/)
[![Website shields.io](https://badges.aleen42.com/src/npm.svg)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](http://shields.io/)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
[![Website shields.io](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)](http://shields.io/)

# Book Search Engine
An application that search for new books to read, save and to keep a list of books to purchase.

## Table of Contents
<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#user-story">User Story</a></li>
    <li><a href="#link-to-live-demo">Link to Live Demo</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project 
Fully functioning Google Books API search engine built with GraphQL API and Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server.
- First when user visits the page, he/she can search a book which will then return a list of books available in google.
- Then user will be given option to save the book or if book is already saved the button text will change to 'Book already saved'
- Then when user saves the books they can visit 'See your Books' tab to get the list of saved books.
- From here user can delete the book from the list.

<p align="center">
  <img  src="./client/public/assets/main.png" width="45%"> 
&nbsp; &nbsp; &nbsp; &nbsp;
  <img  src="./client/public/assets/saved.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img  src="./client/public/assets/delete.png" width="45%">

</p>

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```
### Link to Live Demo
[Book Search Engine](https://book-search-enginem.herokuapp.com/)

### Prerequisites

Please make sure that you have the latest node packages.
* npm
  ```sh
  npm install npm@latest -g
  ```

## Installation
- If you want to run the app on your local server download it through Github.
- Run npm i or (npm install), to make sure to download all the necessary files in the jason package.
- In your command shell run npm start.

## Usage 
The fact that most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant.

<p align="center">
  <img  src="./client/public/assets/demo1.gif" width="45%"> 
&nbsp; &nbsp; &nbsp; &nbsp;
  <img  src="./client/public/assets/demo2.gif" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img  src="./client/public/assets/demo3.gif" width="45%">
</p>

* Demo-1: Animation shows "star wars" typed into a search box and books about Star Wars appearing as results.
The user can save books by clicking "Save This Book!" under each search resuls.
* Demo-2: Animation shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "Book Already Saved" after it is clicked and the book is saved.
A user can view their saved books on a separate page.
* Demo-3: Animation shows the Viewing Lernantino's Books page shows the books that the user Lernaninto has saved.

### Built With

* React, Node.js, Bootstrap liberary, Apollo server, GraphQL and Mongodb.
* Deployed through Heroku.
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact
[![Website shields.io](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](http://shields.io/)

Mohamed Mesahel - mohamed.mesahel86@gmail.com

[![Website shields.io](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](http://shields.io/)

https://github.com/MohamedMesahel

[![LinkedIn][linkedin-shield]][linkedin-url] 

<!-- LICENSE -->
## License

Distributed under the MIT License. 
<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List for some useful resources!
* [Node](https://node-app.com/)
* [MongoDB documentation on Deploy with Heroku](https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/)
* [Apollo Server Documentation](https://www.apollographql.com/docs/)
* [GraphQL](https://graphql.org/code/)



<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/mohamed-mesahel-pmp-570a0423/
