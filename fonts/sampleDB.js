{
  // JobPost
  "JobPost": {
    "JobPost-one": {
      "Title": "Historical Tech Pioneers",
      "Description": "ghopper: Relay malfunction found. Cause: moth.",
      "Coordinates": { .. },
      "timestamp": 1459361875666,
      "Price": "20",
      "JobPostID": "JobPost-one",
    },
    "JobPost-two": { ... },
    "three": { ... }
  },

  "users":{
    "users-one": {
      "email": "adrivanrex@gmail.com",
      "profile_picture": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
      "username": "Rex Adrivan"
    },
    "users-two":{
      ...
    }
  },

  "JobApplicant": {
    "JobPost-one": {
      "users-one": true,
      "users-two": true,
      "users-three": true
    },
    "JobPost-two": { ... },
    "JobPost-three": { ... }
  },

  
  "JobApplicants": {
    "JobApplicants-one": {
      "JobPost-one": {
        "users-one": true,
        "users-two": true,
      },
      "m2": { ... },
      "m3": { ... }
    },
    "two": { ... },
    "three": { ... }
  }
}