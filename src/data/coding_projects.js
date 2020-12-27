export const codeData = [
  {
    title: "Lake Hopper",
    description: [
      "I created Lake Hopper to record my backpacking trips. As an avid backpacker, I wanted a place where I could see all of my past trips and save all the routes, photos, and notes for every trip.",
      "I had found myself using multiple apps for backpacking: AllTrails for creating new routes, Garmin for recording activities, Strava for trip analysis/notes, and Google Photos for albums.",
      "Lake Hopper combines all of these features in one app and makes it much simpler to save all the information for a trip in a single location and to get an overview of all the trips together!",
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
    photos: [
      { url: "draw_video_notab.gif", title: "Creating Custom Routes" },
      { url: "landing.png", title: "Landing Page" },
      { url: "trip_show.gif", title: "Trip Display" },
      { url: "trip_index.gif", title: "Trip Index" },
      {
        url: "upload_video.gif",
        title: "Uploading Files From Smartwatch",
      },
    ],
    github: "https://github.com/kiana-h/lake-hopper",
    live: "https://lakehopper.io",
  },
  {
    title: "Tweet Streamer",
    description: [
      "Tweet Streamer is a web app displaying a live stream of about 1% of all tweets worldwide (~5 million tweets a day)!",
      "Each tweet has been evaluated using a custom 'sentiment analyzer' that supports 10 languages and emojis! Each tweet's color corresponds to its sentiment score. (green: positive, red: negative, yellow: neutral)",
      "Tweets are also aggregated and stored based on their location and displayed on a history map along with their count and average sentiment score.",
      ,
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
    photos: [
      { url: "live-map.gif", title: "Live Stream of Worldwide Tweets" },
      { url: "history-map.gif", title: "Weekly History of Aggregated Tweets" },
    ],
    github: "https://github.com/kiana-h/twitt-stream-er",
    live: "https://tweetstreamer.com",
  },
  {
    title: "Covid Killer",
    description: [
      "I initially created Covid Killer as an animation which simulated the spread of Covid-19 based on some variables. That animation evolved into a game!",
      "The player controls a white blood cell which tries to destroy all the floating corona virus cells before they infect the healthy cells.",
      "The game has 3 difficulty levels which corresponds to the speed of the moving objects: Shelter-in-Place, Normal, and Trump Rally! Increasing the number of virus and healthy cell objects also increases the difficulty.",
      "Differenet collision handler functions are implemented to manage the interaction of objects.",
    ],
    technologies: ["JavaScript", "HTML Canvas"],
    photos: [
      { url: "gameplay.gif", title: "Game Play" },
      { url: "start_dialog.png", title: "Start Dialog / Game Parameters" },
    ],

    github: "https://github.com/kiana-h/covid-killer",
    live: "https://kiana-h.github.io/covid-killer/",
  },
];
