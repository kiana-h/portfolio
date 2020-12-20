export const codeData = [
  {
    title: "Lake Hopper",
    description: [
      "I initially created Lake Hopper to record my own backpacking trips. As an avid backpacker, I wanted a place where I could see all of my past trips and save all the routes, photos, and notes for every trip.",
      "I had found myself using multiple apps for backpacking: AllTrails for creating new routes, Garmin for recording activities, Strava for trip analysis/notes, and Google Photos for albums.",
      "Lake Hopper combines all of these features in one app and makes it much simpler to save all the information for a trip in a single location and to get an overview of all the trips backpacking trips!",
    ],
    technologies: [
      "Ruby on Rails",
      "PostgreSQL",
      "AWS S3",
      "React",
      "Redux",
      "MapBox",
      "Material UI",
    ],
    photos: ["draw_video.gif", "draw_video.gif", "draw_video.gif"],
    github: "https://github.com/kiana-h/lake-hopper",
    live: "https://lakehopper.io",
  },
  {
    title: "Tweet Streamer",
    description: [
      "Tweet Streamer is a web app displaying a live stream of about 1% of all tweets worldwide (~5 million tweets a day)!",
      "The tweets from the past week are aggregated based on their location and displayed on a history map.",
      "Each tweet has been evaluated using a custom 'sentiment analyzer' that supports 10 languages and emojis! Each tweet's color corresponds to its sentiment score. (green: positive, red: negative, yellow: neutral)",
    ],
    technologies: [
      "Node.js",
      "PostgreSQL",
      "PostGIS",
      "Sequelize",
      "Twitter API",
      "WebSockets",
      "React",
    ],
    photos: ["live-map-.gif"],
    github: "https://github.com/kiana-h/twitt-stream-er",
    live: "http://twitt-stream-er.herokuapp.com/",
  },
  // {
  //   title: "Covid Killer",
  //   description: [],
  //   technologies: ["JavaScript", "React"],
  //   photos: ["live-map-.gif"],
  //   github: "",
  //   live: "",
  // },
];
