import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {

    const today = new Date();
    const day = today.getDay();
     console.log(day);

      let dtype = "a weekday";
      let adv = "it's time to work hard";


if (day === 0 || day === 6) {
    dtype = "the weekend";
    adv = "it's time to sleep sleep sleep 😴🤤😵 ";
  }else {
    dtype = "the weekdays";
    adv = "it's time to focus and work hard 🤭😭";
  }

  res.render("index.ejs",{

    dayType: dtype,
    advice: adv,

  });

});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  

  

