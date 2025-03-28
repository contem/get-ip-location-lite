const http = require("http"); // https yerine http

/**
 * Fetches geolocation data for a given IP address using ip-api.com.
 *
 * @param {string} [ip=""] - Optional IP address. If omitted, will return info for caller IP.
 * @returns {Promise<object>} Location info including country, city, lat/lon, ISP, etc.
 */
async function getIPLocation(ip = "") {
  const url = `http://ip-api.com/json/${ip}`;

  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.status === "success") {
            resolve(parsed);
          } else {
            reject(new Error(parsed.message || "IP location lookup failed."));
          }
        } catch (err) {
          reject(new Error("Failed to parse response"));
        }
      });
    }).on("error", reject);
  });
}

module.exports = getIPLocation;
