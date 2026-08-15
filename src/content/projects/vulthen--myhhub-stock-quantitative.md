---
repo: "Vulthen/myhhub-stock-quantitative"
name: "myhhub-stock-quantitative"
description: "stock. Obtain stock data, calculate stock indicators, chip distribution, identify stock patterns, comprehensive stock selection, stock selection strategy,"
readmeQualityOk: true
url: "https://github.com/Vulthen/myhhub-stock-quantitative"
language: "Python"
languages: ["Python", "CSS"]
languagePcts: [49, 44]
topics: ["backtest", "backtesting", "broker-trading-platform", "cyq", "distribution-of-chips", "position-cost-distribution", "quantitative", "quantitative-finance", "stock", "stocks"]
stars: 8
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-17T21:09:43Z"
lastCommitAt: "2026-08-15T04:02:47Z"
lastReleaseAt: "2025-06-17T21:15:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 78
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3024127e7361cb6276913a67d6f551a063dc2d1d6430b854f7a111f2b36890a7/Vulthen/myhhub-stock-quantitative"
---

### pythonstock V3.0 项目简介，2025.02.28更新

**特别说明：股市有风险投资需谨慎，本项目只能用于Python代码学习，股票分析，投资失败亏钱不负责，不算BUG。**

**github/gitee是项目地址**

github地址：
https://github.com/pythonstock/stock

gitee地址：
https://gitee.com/pythonstock/stock

**视频地址：**
https://space.bilibili.com/52280367/lists/1923758?type=season

**相关博客资料：**
https://blog.csdn.net/freewebsys/category_9285317.html

数据分析清洗使用pandas，numpy。
http://pandas.pydata.org/

数据存储到磁盘上，使用Mysql数据库。存储股票数据。
https://pypi.python.org/pypi/mysqlclient

web框架使用tornado
http://www.tornadoweb.org/en/stable/

tornado web系统
http://docs.pythontab.com/tornado/introduction-to-tornado/

```

PythonStock V3.0 是基于Python的pandas，akshare，bokeh，tornado，stockstats，ta-lib等框架开发的全栈股票系统。
项目创建于2017年7月17日，每月不定期更新。
1）可以直接使用docker直接本地部署运行，整个项目在docker hub上压缩后200MB，本地占用500MB磁盘空间。
2）使用Docker解决了Python库安装问题，使用Mariadb（MySQL）存储数据。借助akshare抓取数据。
3）使用cron做定时任务，每天进行数据抓取计算，每天18点开始进行数据计算，计算当日数据，使用300天数据进行计算，大约需要15分钟计算完毕。
4）股票数据接口防止被封，按天进行数据缓存，储存最近3天数据，每天定时清除，同时使用read_pickle to_pickle 的gzip压缩模式存储。
5）使用tornado开发web系统，支持每日股票数据-东财，龙虎榜-个股上榜-新浪，数据中心-大宗交易行情等。
6）数据展示系统，是通用数据展示系统，配置字典模板之后，页面自动加载数据，并完成数据展示，后续自己开发的指标数据可以加入进去。
7）增加曲线数据分析，在查看股票中，可以直接跳转到东方财富页面查看相关信息，点击指标之后使用Bokeh将多达 17 个指标的数据绘图，进行图表展示。
8）2.0…
