var express = require('express');
var router = express.Router();

const { URL } = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  let dbIp = 'Unknown';
  let dbPort = 'Unknown';
  try {
    if (process.env.DATABASE_URL) {
      const dbUrl = new URL(process.env.DATABASE_URL);
      dbIp = dbUrl.hostname;
      dbPort = dbUrl.port || '5432';
    }
  } catch (e) {
    console.error('URL parse error', e);
  }
  res.render('index', { title: 'Docker Express & Tailwind', dbIp, dbPort });
});

let count = 0; // 計數器
router.get('/count', (req, res) => {
  count++; // 增加計數器
  res.render('count', { count }); // 傳遞計數器到 EJS 模板
});

router.get('/error', (req, res) => {
  process.exit(1);
});

module.exports = router;
