const cardData = [
  {
    title: "Trivia Game",
    photo: "../images/Trivia/main.jpg",
    tasks: [
      "Create a trivia game that asks the user questions on a timer that they must answer.", 
      "If the player selects the right answer, show a screen congratulating them on how amazing they are.",
      "On the final screen, show the player's score and give them an option to restart the game without reloading the page."
    ],
    methods: [
      "I went a bit off script from the original instructions with the teachers' blessing and made a personality game.",
      "Decided on a Star Wars theme and had to create profiles for each possible outcome.",
      "Created a set of questions and responses that each had a weight from -2 to +2 and then displayed the player's \"personality\" at the end",
      "Technologies used: HTML5, CSS3, Javascript, jQuery"
    ],
    challenges: [
      "The most time consuming part of this project was creating the characters array. Because of how I scored things, I needed to create 22 different profiles.",
      "Automating the photos that were shown when the final score was tallied was a challenge. I simply ened up naming all the photos the corresponding scores.",
      "I wanted to also mix my responses up while maintaining their scores so I used RNGs to create the randomized answers."
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
      "Create a website which takes shows the user a list of restaurants based off a neighborhood of their choosing.",
      "The user can look at a map on the page to find the outlines of the neighborhoods.",
      "The app is designed to allow users to \"live like a local\" while visiting the city."
    ],
    methods: [
      "We first had to come up with a design with outside vendors (jQuery Nice, jQuery Easing) without slowing the page down.",
      "We then found out what data we could get from Google Places API to populate our pages",
      "Used jQuery to display the information coming in from Google and Openweathermap on our page in as modern a way possible.",
      "Technologies used: HTML5, CSS3, Javascript, jQuery, Google Places API, Openweathermap API, Isotope, Button Inspirations, jQuery Nice, jQuery Easing",
      
    ],
    challenges: [
      "APIs: This was the first time diving into APIs and how to interact with them to get what we needed. Suffice to say there were many late sleepless nights.",
      "Scope: We wanted to do 2,000,000 things, but only had time to do about 10 of them. Cutting out things we really wanted to do was hard."
    ],
    links: [
      "https://maryhall17.github.io/Local/",
      "https://github.com/oitowl7/Local"
    ],
    images: [
      "../images/Local/mobilefriendlymain.png",
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
      "../images/Studii/mobilefriendlymain.png",
      "../images/Studii/method.jpg",
      "../images/Studii/challenges.jpg",
      "../images/Studii/links.jpg",
      "../images/standard/heroku.png",
      "../images/standard/github-words.png"
    ]
  }
]

export default cardData