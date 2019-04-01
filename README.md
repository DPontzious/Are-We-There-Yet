# PROJECT 3: Are We There Yet?

### Project Collaborators:

* Danelle Pontzious
* Daniel Mata
* Tanner Galloway
* Brian Hopkins 

### Overview

For this project, we created a web application called `Are We There Yet?` that plots and saves road trip itineraries based on users’ point of origin and destination, including address, city, landmark, zip code, or airport code.
It displays Road, Aerial, and Streetside views of the best route as well as a list of local events for the travel destination. It also requires user authentication (Sign in/Sign Up), and it allows users to save their travel itineraries.

We created the app with HTML, CSS, JS, ReactJS, Material-UI, Bootstrap, 
Reactstrap, Node, Express, MongoDB, Mongoose, and Sequelize. We used the Bing Maps API to plot road trip itineraries. The retrieved API data displays Road, Aerial and Streetside views of the best route according to distance, time, and tolls, and it provides detailed directions. Lastly, we deployed the app to Heroku.

### Functionality

The app features three pages:

 * `Home` - the app home page
 
    * The user is instructed to "Enter your travel destination." This page features `Starting Point` and `Destination` text fields and a `Submit` button.

 * `Trip` - this page displays the best route map and directions.

    * After the user enters their travel starting point and destination, they are taken to this page, which displays the best route map and directions.

 * `Events` - this page displays the list of local events for the travel destination (usually cities). There may also be a slight delay before the information is displayed.

 * `Sign in/Sign Up` - this window handles user authentication by allowing users to sign in/sign up.
 
    * This window also allows users to save their travel itineraries.