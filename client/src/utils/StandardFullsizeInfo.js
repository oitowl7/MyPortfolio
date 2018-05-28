const cardData = [
  {
    title: "Trivia Game",
    photo: "../images/Trivia/main.jpg",
    tasks: [
      "Create a trivia game that shows one question at a time to a player who must answer it before the timer runs out, which is reset upon the question being answered.", 
      "If the player selects the right answer, show a screen congratulating them on how amazing they are.",
      "On the final screen, show the player how many they got right and wrong and give them an option to restart the game without reloading the page."
    ],
    methods: [
      "For this project, I went a bit off script from the original instructions, with the blessing of those who would be grading it of course. It mae little sense to me to have a trivia game with only 5-10 pre-scripted questions (we had not yet learned of APIs) so I decided to create a personality test that logged answers and kicked out a character that the user represents.",
      "First, I had to decide on a theme. Me being a Star Wars fan, I chose to make my characters about that. I had to choose 22 force sensitive characters from the universe. I then gave each a good/evil value as well as a short bio and stored them all in an array",
      "I then created a set of questions and responses. Each response had a value assigned to it from -2 to +2. There was also Jar Jar Binks quotes that were worth 0. If the user selected all Jar Jar quotes or ran out of time on each question, they got Jar Jar as their character. Otherwise, the final score was tallied and their character was shown.",
      "Technologies used: HTML5, CSS3, Javascript, jQuery"
    ],
    challenges: [
      "The most time consuming part of this project was creating the characters array. I had to find 22 characters (as the user score could be anywhere between -10 and +10 and 2 characters were needed for 0). Finding the characters and creating a very short bio for each character was very time consuming but also fairly enjoyable.",
      "Automating the photos that were shown when the final score was tallied was a challenge. I simply ened up naming all the photos the corresponding scores.",
      "I wanted to also mix my responses up while maintaining their values. To do this I used random number generators and verifications to randomly display the responses and keep the good/bad values intact."
    ],
    links: [
      "https://oitowl7.github.io/trivia-game/",
      "https://github.com/oitowl7/trivia-game"
    ],
    images: [
      "../images/Trivia/page.jpg",
      "../images/Trivia/results.jpg",
      "../images/Trivia/challenges.jpg",
      "../images/Trivia/links.jpg",
      "../images/standard/Gitpages.png",
      "../images/standard/github-words.png"
    ]
  },
  {
    title: "Local",
    purpose: "To find the best restaurants in specific geographic neighborhoods around Richmond (and potentially beyond), therefore living like a local",
    technologiesUsed: "HTML5, CSS3, Javascript, jQuery, Google Places API",
    photo: "../images/Local/main.png",
    tasks: [
      "Create a website which takes shows the user a list of restaurants based off a neighborhood of their choosing",
      "The user is allowed the option to look at a map of the neighborhood outlines in the city they want to look at (currently Richmond, VA is the only available city) that pops up in a modal. The user then can select from a dropdown box their neighborhood of choice to show the restaurants there.",
      "The results are listed as cards which display the restaurant's name, whether it is open or closed, address, rating, and a link to open it in Google maps",
      "The app is designed to allow the user to live like a local when they are visiting the city and don't know what to do."
    ],
    methods: [
      "We first had to come up with a design and overall idea of what we wanted the page to look like. We wanted to make it look very sleek and modern while not compromising the speed of the page loading. We used several outside vendor libraries to achieve this including Button Styles Inspiration, jQuery Nice, jQuery Easing, and Isotope (which never made it into the final build)",
      "We then had to work out the Google Places API to figure out what we could and couldn't get from it and then use that to display our desired restaurants. Google Places will return places based on neighborhood names, so we were able to use that. However, in order to let the user know where the neighborhood was, we had to create a map with polygons in it showing the neighborhood outlines using MyMaps from Google.",
      "The final part was to display a selection of restaurants in the area that they selected on the screen with the information we wanted to show (name, address, link to Google Maps, etc). This was achieved using jQuery. We also wanted to display the weather in the local area at the top and to do this we used the Openweathermap API.",
      "Technologies used: HTML5, CSS3, Javascript, jQuery, Google Places API"
    ],
    challenges: [
      "This was the first time we really got stuck into both jQuery and APIs. We lost a lot of sleep collectivly trying to figure out both how to get the information we wanted from Google and figuring out how to display that data on the page. There were several hacks done and shortcuts taken in order to get a finished project on the page but eventually we got it to where it needed to be.",
      "As with probably every project ever done, getting our scope of features and wants to have vs. haves to have narrowed down and focused was a huge task. There were so many things we wanted to do but eventually had to scrap. A famous author once said something to the effect of 'if you don't cut out something you love, then what you wrote wasn't good enough'"
    ],
    links: [
      "https://maryhall17.github.io/Local/",
      "https://github.com/oitowl7/Local"
    ],
    images: [
      "../images/Local/main.png",
      "../images/Local/methods.jpg",
      "../images/Local/challenges.jpg",
      "../images/Local/links.gif",
      "../images/standard/Gitpages.png",
      "../images/standard/github-words.png"
    ]
  },
  {
    title: "Studii",
    purpose: "To find the best restaurants in specific geographic neighborhoods around Richmond (and potentially beyond), therefore living like a local",
    technologiesUsed: "HTML5, CSS3, Javascript, jQuery, google places api",
    photo: "../images/Studii/main.png",     
    tasks: [
      "Create a website which allows users to link up with other users at there school to study together.",
      "Takes in user's information (school, schedule, study styles, locations etc.) and use that to link up users that have similar interests",
      "Display potential matches that the user can then email themselves",
      "Allow user to change their profile information"
    ],
    methods: [
      "Coming up with a design using Figma to layout the pages.",
      "Create the Facebook login page, sign up page, profiles page, and settings page to accept user input and display data back from our database.",
      "Make our data structure make sense for the type of actions we were trying to do. We ended up using MongoDB as it made the most sense."
    ],
    challenges: [
      "Scope: We wanted to do a lot more with this, but just didn't have time to fully realize it. We would like to add a chat functionality, as well as stabalize the page a bit more",
      "React: This was our first real test using React.js. Some of us were able to pick it up quicker while others of us were only really getting it towards the end."
    ],
    links: [
      "https://the-studii-app.herokuapp.com/",
      "https://github.com/oitowl7/Studii-app"
    ],
    images: [
      "../images/Studii/mainmobile.png",
      "../images/Studii/method.jpg",
      "../images/Studii/challenges.jpg",
      "../images/Studii/links.jpg",
      "../images/standard/heroku.png",
      "../images/standard/github-words.png"
    ]
  }
]

export default cardData