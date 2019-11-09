# 幹話產生器 ver1.0

利用 Node.js 跟 Express建立簡單的伺服器，並搭配 Bootstrap 做出幹話產生器

## 本專案所使用的套件

* express
* express-handlebars
* body-parser
* nodemon

## 如何啟動本專案

### 從伺服器上取得本專案的Repository

打開終端機，輸入以下指令：
```
$ git clone　https://github.com/blue1152/rubbish_word.git
```

### 安裝 Node.js，並透過 npm 來安裝package.json檔案所定義的相依套件

1. 在rubbish_word目錄下，透過 nvm 來安裝 Node.js最新版本(10.15.0)：
```
$ nvm install 10.15.0
```

2. 到package.json所在的目錄下，輸入：
```
$ npm install
```

### 透過 nodemon 來啟動伺服器

打開終端機，輸入以下指令，並在瀏覽器檢視伺服器的回應：
```
$ nodemon app.js
```

## 幹話產生器ver1.0的內容

* 輸入姓名：可自由輸入想對誰說幹話!
* 職業選擇：預設工程師、設計師、創業家三選一
* 產生幹話：可得到隨機產生的幹話
* 複製幹話：有個方便的連結讓你一鍵複製幹話~

