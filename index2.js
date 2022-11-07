const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const logger = morgan("tiny");
const axios = require("axios");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

// 首页
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


// 获取计数
app.get("/api/count", async (req, res) => {
  console.log(req.body)
  res.send({
    code: 0,
    data: 1,
  });
});

// 小程序调用，获取微信 Open ID
app.get("/api/wx_openid", async (req, res) => {
  if (req.headers["x-wx-source"]) {
    res.send(req.headers["x-wx-openid"]);
  }
});


app.post("/api/axios", async (req, res) => {
  res.send(req);

  // let axres = await axios({
  //   method: 'POST',
  //   url: `/mission/siteSurvey/list`,
  //   data: {
  //     equals: { missionId: this.missionId },
  //   },
  // })

  // res.send(axres);
});

const port = process.env.PORT || 80;

async function bootstrap() {
  app.listen(8991, () => {
    console.log("启动成功", 8991);
  });
}

bootstrap();
