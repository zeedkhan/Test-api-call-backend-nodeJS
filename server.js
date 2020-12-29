import express from "express";
import axios from "axios";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  if (res.status === 200) {
    res.send("Connected");
  } else {
    res.send("no found");
  }
});

async function getMovie() {
  const request = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=0930d6e169489c706f349c5e382ab610&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
  );
  console.log(request.data);
  return request.data;
}

app.get("/api", async (req, res) => {
  const data = await getMovie();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
