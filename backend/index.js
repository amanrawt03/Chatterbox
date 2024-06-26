const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors({origin:true}))
app.use(express.json());


app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "7ac69a89-48b2-4642-81e3-e89274080369" } }
    );
    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);
