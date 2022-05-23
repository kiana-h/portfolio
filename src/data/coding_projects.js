export const codeData = [
  {
    title: "Replica",
    type: "Professional Work",

    description: [
      "Replica, formerly part of Alphabet's Sidewalk Labs, is a data platform for urban planners.",
      "As a software engineer on the Application team, I develop the infrastructure and interfaces for users to access and analyze geospatial data about urban ecosystems.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "React",
      "Redux",
      "MapBox",
      "Material UI",
    ],
    photos: [
      { url: "trips.png", title: "SF Mobility Data Visualization" },
      { url: "trends.png", title: "Weekly Trends Analyzer" },
      { url: "dataset.png", title: "Trip Data Preview" },
      { url: "networks.png", title: "Seasonal Traffic Distribution" },
      { url: "landuse.png", title: "SF Bay Area Land Use Map" },
      { url: "uploads.png", title: "Data Uploads Portal" },
      { url: "transit.png", title: "NYC Public Transit Routes" },
    ],
    website: "https://replicahq.com/",
    timeline: "2021 - Present",
  },
  {
    title: "Tweet Streamer",
    type: "Personal Project",
    description: [
      "Tweet Streamer is a web app displaying a live stream of about 1% of all tweets worldwide (~5 million tweets a day)!",
      "Each tweet has been evaluated using a custom 'sentiment analyzer' that supports 10 languages and emojis! Each tweet's color corresponds to its sentiment score. (green: positive, red: negative, yellow: neutral)",
      "Tweets are also aggregated and stored based on their location and displayed on a history map along with their count and average sentiment score.",
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
      { url: "live-map.mp4", title: "Live Stream of Worldwide Tweets" },
      { url: "history-map.mp4", title: "Weekly History of Aggregated Tweets" },
    ],
    github: "https://github.com/kiana-h/twitt-stream-er",
    live: "https://tweetstreamer.com",
    timeline: "2020",
  },
  {
    title: "Lake Hopper",
    type: "Personal Project",
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
      { url: "draw_video_notab.mp4", title: "Creating Custom Routes" },
      { url: "trip_show.mp4", title: "Trip Display" },
      { url: "trip_index.mp4", title: "Trip Index" },
      {
        url: "upload_video.mp4",
        title: "Uploading Files From Smartwatch",
      },
      { url: "landing.png", title: "Landing Page" },
    ],
    github: "https://github.com/kiana-h/lake-hopper",
    live: "https://lakehopper.io",
    timeline: "2020-2021",
  },
];
