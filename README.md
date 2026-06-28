# 🐳 Docker 雙棲架構：Node.js + PostgreSQL 實戰指南

這是一個示範如何將 Node.js (Express) 結合 PostgreSQL，並完美整合 **Docker 雙棲架構 (Dual-Environment Setup)** 的開源學習專案。
本專案搭載了使用 TailwindCSS 打造的現代化科技感面板，讓你能直觀地感受 Docker 容器間的通訊與資料持久化 (Volumes) 的魅力！

## ✨ 專案亮點

- **🏭 Docker 雙棲架構**：示範業界標準的 `docker-compose.yml` (正式版) 與 `docker-compose.override.yml` (本地開發版) 切換機制。
- **⚡ 開發熱重載 (Hot-Reload)**：本地端結合 `nodemon` 與 TailwindCSS JIT 編譯，存檔瞬間即時預覽。
- **🔒 資安最佳實踐**：密碼不落地！示範如何正確使用 `.env` 與環境變數來保護資料庫密碼。
- **💾 資料持久化展示**：透過 UI 介面，直接實測寫入 PostgreSQL 資料庫與 Docker Named Volume 的差異。
- **🎨 現代化 UI**：捨棄傳統單調的範例畫面，採用深色科技感面板，清楚顯示資料庫連線 IP 與 Port。

## 💡 核心概念：雙棲架構與 Override 機制

本專案實踐了 Docker Compose 的「覆寫 (Override)」設計模式，解決了開發與正式環境設定衝突的痛點：

1. **`docker-compose.yml` (正式版)**
   - 這是**會被上傳到 GitHub** 的乾淨且安全的檔案。
   - 不包含熱重載指令，預設使用 Dockerfile 中的 `npm start` 啟動。
   - 不掛載本機資料夾，確保雲端機台執行時不會因為找不到檔案而發生錯誤。
   - *(如需在雲端使用檔案持久化，需自行解除檔案內 `nodejsdata` 的註解)*。

2. **`docker-compose.override.yml` (本地開發版)**
   - 這是**被 `.gitignore` 隱藏**，只存在於你個人電腦上的檔案（你必須從 `example` 複製出來）。
   - 當你在本地輸入 `docker compose up -d` 時，Docker 會自動將這個檔案裡的設定「覆蓋」到正式版上。
   - **修改點一**：將啟動指令改為 `command: npm run dev`，啟動 `nodemon` 與 CSS 即時編譯。
   - **修改點二**：掛載了 `volumes: - ./:/usr/local/app`，讓你在本機 VSCode 修改檔案時，容器內的程式碼能瞬間同步，實現熱重載。

透過這套機制，團隊達成了**「一套代碼，本機完美熱重載開發，Push 到雲端卻能無縫安全部署」**的最高標準！

---

## 🚀 快速開始 (Quick Start)

只要你的電腦有安裝 [Docker Desktop](https://www.docker.com/products/docker-desktop/)，跟著以下步驟，5 分鐘內就能啟動專案！

### 1. 下載專案
```bash
git clone https://github.com/liwenchiou/dockerDevDEMO.git
cd dockerDevDEMO
```

### 2. 環境變數與覆寫檔設定
為了資安與開發便利，請將範本檔案複製為實際設定檔：
```bash
cp .env.example .env
cp docker-compose.override.example.yml docker-compose.override.yml
```

### 3. 一鍵啟動
```bash
docker compose up -d --build
```
啟動完成後，打開瀏覽器前往 👉 [http://localhost:3000](http://localhost:3000)

---

## 📚 深入學習指南

想了解這套架構背後的設計邏輯、日常開發 SOP，以及未來如何部屬到雲端嗎？
👉 **請參考專案內的詳細教學文件：[開發實務流程](./.doc/開發實務流程.md)**

## 🛠 技術堆疊 (Tech Stack)

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL 14 (with Sequelize ORM)
- **Frontend**: EJS Template, TailwindCSS v3, Axios
- **DevOps**: Docker, Docker Compose

## 🤝 貢獻與交流

這是一個供大家學習 Docker 實務技巧的 DEMO 專案，歡迎 fork 過去玩，如果發現任何可以改進的地方，也歡迎提交 PR 或是開 Issue 討論！
