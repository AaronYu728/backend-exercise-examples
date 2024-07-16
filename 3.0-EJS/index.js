import express from "express";

const app = express();
const port = 3000;

//Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");

const today = new Date();
let day = today.getDay();
let daytp = "weekday";
let adv = "It's time to work hard";

if (day === 0 || day === 6) {
  daytp = "weekend";
  adv = "It's time to have fun";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: daytp,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
