# 🌍 get-ip-location-lite

Lightweight utility to fetch geolocation data (country, city, ISP, coordinates, etc.) from an IP address using the **ipwho.is** API.

No API key required. Works with HTTPS.

---

## 📦 Installation

### Using npm

```bash
npm install get-ip-location-lite
```

### Using yarn

```bash
yarn add get-ip-location-lite
```

---

## 🚀 Usage

```js
const getIPLocation = require("get-ip-location-lite");

// Get the location of the current user's IP
getIPLocation()
  .then(data => console.log("Your IP Location:", data))
  .catch(err => console.error("Error:", err));

// OR get location info for a specific IP
getIPLocation("8.8.8.8")
  .then(data => console.log("Google DNS IP Location:", data))
  .catch(err => console.error("Error:", err));
```

---

## ⚙️ Options

No options object required.

| Parameter | Type     | Required | Description                            |
|-----------|----------|----------|----------------------------------------|
| `ip`      | `string` | ❌       | IP address to lookup (leave blank for current IP) |

---

## 📤 Output Example

```json
{
  "ip": "8.8.8.8",
  "success": true,
  "country": "United States",
  "city": "Mountain View",
  "region": "California",
  "latitude": 37.386,
  "longitude": -122.0838,
  "isp": "Google LLC"
}
```

> Powered by [ipwho.is](https://ipwho.is)

---

## 🧪 Run Test

```bash
node test.js
```

---

## 🪪 License

```
MIT
```