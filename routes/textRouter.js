// routes/textdata.js
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const TextModel = require("../models/TextModel");

// 處理 POST 請求，新增文字資料到 PostgreSQL
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    await TextModel.create({ text: req?.body?.text });
    res.send("資料新增成功");
  } catch (error) {
    res.status(400).send(error);
  }
});

// 獲取所有資料
router.get("/", async (req, res) => {
  try {
    const textData = await TextModel.findAll();
    console.log(textData);
    res.json(textData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 刪除特定資料
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await TextModel.destroy({ where: { id } });
    if (result) {
      res.send("刪除成功");
    } else {
      res.status(404).send("找不到該資料");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/savetext", (req, res) => {
  const { text } = req.body;
  const filePath = path.join(__dirname, "../dist/text.txt");

  fs.writeFile(filePath, text, (err) => {
    if (err) {
      console.error("檔案寫入失敗:", err);
      return res.status(500).send("檔案寫入失敗");
    }
    res.send("檔案已成功儲存");
  });
});

router.get("/filecontent", (req, res) => {
  const filePath = path.join(__dirname, "../dist/text.txt");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.send("尚未建立任何檔案內容");
      }
      return res.status(500).send("檔案讀取失敗");
    }
    res.send(data || "檔案是空的");
  });
});

module.exports = router;
