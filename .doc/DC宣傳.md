🎉 **【開源分享】業界標準的 Docker 雙棲開發模板 (Node.js + PostgreSQL + TailwindCSS)** 🎉

嗨大家！最近在研究 DevOps 跟 Docker，發現很多人（包含我自己以前）常踩到一些雷：像是開發跟正式環境設定全混在一起、不小心把資料庫密碼推上 GitHub，或是不知道怎麼在 Docker 裡面完美實現前端熱重載。

為了解決這些痛點，我花了一些時間整理並開源了一個 **Production-Ready** 的實戰 DEMO 專案！如果你對 Docker 容器化開發有興趣，可以直接 Clone 下來玩玩看！👇

🔗 **專案連結：** https://github.com/liwenchiou/dockerDevDEMO

✨ **這個專案能學到什麼？（專案亮點）**
🔹 **Docker 雙棲架構 (Override 機制)**：示範如何用 `docker-compose.yml` (正式版) 搭配 `docker-compose.override.yml` (本地開發版)，做到「本地完美熱重載，雲端安全不報錯」！
🔹 **環境變數資安實戰**：示範 `.env` 的正確用法，密碼絕對不落地，解決新手最常犯的密碼外洩問題。
🔹 **資料持久化 (Data Persistence) 實測**：內建一個深色科技感的 UI 面板，可以直接實測 PostgreSQL 的讀寫，體驗 Docker Named Volume (保險箱) 到底是怎麼保護資料的！
🔹 **前端即時編譯**：示範如何在 Node.js 容器內，同時用 `concurrently` 結合 TailwindCSS JIT 進行熱重載開發。

🛠 **怎麼開始？**
專案裡面有附上一份超詳細的 `.doc/開發實務流程.md` 教學文件。
只要你有裝 Docker，Clone 下來後按照步驟 `cp .env.example .env`，然後下達一鍵啟動指令 `docker compose up -d --build`，5 分鐘內就能在你的電腦上跑出完整的黑客風測試面板！

非常歡迎大家 Fork 過去玩！如果有任何優化建議或是遇到奇怪的 Bug，也歡迎直接開 Issue 跟我討論交流～🙌
