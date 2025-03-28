const getIPLocation = require("get-ip-location-lite");

// Get caller IP location
getIPLocation()
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Or look up a specific IP
getIPLocation("8.8.8.8")
  .then(data => console.log(data))
  .catch(err => console.error(err));
