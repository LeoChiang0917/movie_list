# Movie_list清單 2.0
此專案提供使用者瀏覽電影

功能列表
依照餐廳名稱及餐廳類別搜尋
依照餐廳名稱、類別及地區排序
檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map
點選Back返回首頁瀏覽全部餐廳資料
點選Edit編輯此筆餐廳資料
點選Delete刪除此筆餐廳資料
點選 Google Map顯示詳細地圖可查看位置詳細資料
點選Create新增餐廳包含上傳圖片、評分、類別、地址等資訊，Google Map 位置會依照輸入之地址產生
點選 ✏️ 可編輯此餐廳資料
點選 🗑️ 可刪除此餐廳資料
安裝
1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

git clone https://github.com/LeoChiang0917/movie_list.git
2.初始

cd Restaurant-CRUD  //切至專案資料夾
npm install  //安裝套件
3.產生預設使用者及餐廳資料至 MongoDB

npm run insertSeeds  //執行增加資料至 MongoDB
終端顯示 users insert done! 及 restaurants insert done! 即完成新增資料

Ctrl+C *2  //連按兩下Ctrl+C結束批次工作
4.開啟程式

npm run start  //執行程式
終端顯示 db is connected! 即啟動完成，請至http://localhost:3000開始使用程式
