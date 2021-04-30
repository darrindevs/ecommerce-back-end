# E-commerce-backend

This command line app represents the back end of an imaginary e-commerce app. It runs on Express.js and uses Sequelize to interact with a MySQL database. Sensitive data is stored using environmental variables through the dotenv package. 

The walkthrough videos demonstrate the server starting with Node.js, the creation of a MySQL database schema from the terminal, the seeding of the database and then the functioning GET, POST, PUT and DELETE routes using Insomnia Core. 

## Walkthrough Videos 

[1. Starting the Server!](https://vimeo.com/543450167)

[2.Creating the DB Schema from Terminal!](https://vimeo.com/543452007)

[3. Seeding the DB !](https://vimeo.com/543452621)

[4. Demo of GET, POST, PUT and DELETE in Insomnia Core!](https://vimeo.com/543452998)


## Technologies Used

🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

♻️ Node.js - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

📦 npm - npm is a package manager for the JavaScript programming language. npm, Inc. is a subsidiary of GitHub, that provides hosting for software development and version control with the usage of Git. npm is the default package manager for the JavaScript runtime environment Node.js.

🔑 mysql2 - mysql2 is a node.js driver for mysql. It is written in JavaScript and does not require compiling.

⚡️ Express - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs. 

🌈 Sequelize - Sequelize is a promise-based Node.js ORM for MySQL. It features solid transaction support, relations, eager and lazy loading, read replication and more.

☕️ dotenv - dotenv is a zero-dependency module that loads environment variables from a . env file into process. env . 

☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

⛅️ GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.


## Code Snippet 

~~~
router.post('/', async (req, res) => {
  // create a new category
  try {
    //* create a new category using the post method and Category.create from user input 
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData); //* all good 
  } catch (err) {
    res.status(400).json(err); //* error message 
  }
});
~~~

## Author

🤓 [darrindevs](https://github.com/darrindevs)



