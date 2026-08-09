---
repo: "twtrubiks/PttImageSpider"
name: "PttImageSpider"
description: "PTT 圖片下載器 (抓取整個看板的圖片，並用文章標題作為資料夾的名稱 ) (使用Scrapy) "
readmeQualityOk: true
url: "https://github.com/twtrubiks/PttImageSpider"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "scrapy", "ptt", "image", "spider", "download"]
stars: 18
forks: 14
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-02-08T12:54:11Z"
lastCommitAt: "2026-08-09T04:46:22Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 70
undervaluedScore: 32
maintainers: ["twtrubiks"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8b1adac8206398489de059a50b790a65a881566e8f08d4fa17103a1769cba32/twtrubiks/PttImageSpider"
---

# PTT 爬蟲圖片下載器 (使用Scrapy) PttImageSpider

抓取PTT整個看板的圖片，並用文章標題作為資料夾的名稱

* [Demo Video](https://www.youtube.com/watch?v=B78ZYEjkSaY) - Linux V2 (demo )
* [Demo Video](https://youtu.be/6BHiLOtsW2Y) - Linux V1 (教學+demo )

## 特色

* 抓取PTT特定看板全部的圖片
* 使用文章標題作為資料夾的名稱
* 下載圖片速度非常快，1分鐘可抓600張圖片，平均每秒10張

## 使用方法

```cmd
scrapy crawl ptt_img_spider
```

如需抓其他PTT的看板，需要修改路徑 PttImageSpider/PttImageSpider/spiders/pttspider.py 檔案裡的

```python
start_urls = ["https://www.ptt.cc/bbs/AKB48/index.html"]
```

將網址修改為其他看板的網址，範例如下

```python
start_urls = ["https://www.ptt.cc/bbs/NounenRena/index.html"]
```

## 執行畫面

有些看板的網頁頁數非常多，所以如果要強迫終止，可以按 Ctrl + Z 強制結束程式

## 輸出格式

圖片會儲存在專案根目錄的 `images/` 資料夾下：

```
images/
├── [文章標題1]/
│   ├── image1.jpg
│   ├── image2.png
│   └── ...
├── [文章標題2]/
│   └── ...
└── ...
```

每篇文章的圖片會以文章標題作為資料夾名稱進行分類儲存。

## 執行環境

* Python 3.13
* Scrapy 2.17.0
* Pillow 12.0+
* brotli 1.0+ (用於解壓縮 PTT 網頁內容)

安裝套件

```cmd
pip install -r requirements.txt
```

## 技術說明

### Brotli 壓縮支援

PTT 網站使用 Brotli 壓縮（br encoding）來傳輸網頁內容。Scrapy 的 `HttpCompressionMiddleware` 會自動處理各種壓縮格式：

- **gzip, deflate** - Scrapy 內建支援

- **br (Brotli)** - 需要安裝 brotli 套件

**自動處理機制：**

只要安裝 brotli 套件（`pip install brotli`），Scrapy…
