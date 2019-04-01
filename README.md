# PROJECT 3: Are We There Yet?

### Project Collaborators:

* Danelle Pontzious
* Daniel Mata
* Tanner Galloway
* Brian Hopkins 

### Overview

For this project, we created a full stack MERN web application called `Are We There Yet?` that plots and saves road trip itineraries based on users’ starting point and destination, including address, city, landmark, zip code, or airport code.

It displays detailed directions and Road/Aerial/Streetside views of the best route map according to distance, time, and tolls. It also displays a list of local events for a searched city and fun road trip games as well as searchable Groupon deals. In addition, the app requires user authentication (Sign In/Sign Up), and it allows users to save their road trip itineraries.

We created the app with HTML, CSS, JS, ReactJS, Material-UI, Bootstrap, 
Reactstrap, Node, Express, MongoDB, Mongoose, and Sequelize. We used the Bing Maps API to plot road trip itineraries. The retrieved API data displays detailed directions and Road/Aerial/Streetside views of the best route map according to distance, time, and tolls. Lastly, we deployed the app to Heroku.

### Functionality

The app features four pages:

 * `Home` - the app home page
 
    * On this page, the user is instructed to "Enter your travel destination." This page features `Starting Point` and `Destination` text input fields and a `Submit` button.

 * `Trip` - this page displays the best route map and detailed directions.

    * This page features `Starting Point` and `Destination` text input fields and a `Search` button.

    * After the user enters their travel starting point and destination, they are redirected to this page, which displays the best route map and detailed directions.

 * `Events` - this page displays a list of local events for a searched city.
 
    * Note: There may also be a slight delay before this information is displayed.

    * The user can also search for local events in other cities as well as search for `Groupon` deals.

    * On the left-hand side of this page, there are ten clickable buttons for fun road trip games.

 * `Recent Trips` - this page displays the table of the user's saved road trips.

 * `Sign In/Sign Up` - this window handles user authentication by allowing users to sign up/sign in.