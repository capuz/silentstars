---
repo: "xiaoshi930/xiaoshi"
name: "xiaoshi"
description: "卡片汇总"
readmeQualityOk: true
url: "https://github.com/xiaoshi930/xiaoshi"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
stars: 34
forks: 3
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-26T13:00:14Z"
lastCommitAt: "2026-11-09T03:30:38Z"
lastReleaseAt: "2026-06-01T09:42:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 37
maintainers: ["xiaoshi930"]
openGraphImageUrl: "https://opengraph.githubassets.com/12e6d03b5346846bb5e931c20dc0e76ae1a9ec66e0f2fdbb31895d61e8c5263f/xiaoshi930/xiaoshi"
---

# 此为卡片集合汇总
## 安装前请先在HACS删除以下仪表盘集成并移除自定义仓库（如果本来就没安装过，忽略）：   
1、【xiaoshi-phone-card】https://github.com/xiaoshi930/xiaoshi-phone-card  
2、【xiaoshi-pad-card】https://github.com/xiaoshi930/xiaoshi-pad-card  
3、【xiaoshi-card】https://github.com/xiaoshi930/xiaoshi-card  
4、【popup-card】https://github.com/xiaoshi930/popup-card  

## 移除资源配置以下条目：
~~~
- url: /hacsfiles/xiaoshi-phone-card/xiaoshi-phone-card.js
  type: module
- url: /hacsfiles/xiaoshi-pad-card/xiaoshi-pad-card.js
  type: module
- url: /hacsfiles/xiaoshi-card/xiaoshi-card.js
  type: module
- url: /hacsfiles/popup-card/popup-card.js
  type: module
~~~

# 功能清单
## 适用手机端的卡片
### 手机端功能1：空调/水暖毯/热水器卡片
**引用示例**
~~~
type: custom:xiaoshi-phone-climate-card
entity: climate.kongtiao_keting
temperature: sensor.woshi_wendu              ## 额外温度实体，覆盖空调当前温度，用于空调实体没有【当前温度】情况
timer: timer.ke_ting_kong_diao_ding_shi_qi   ## 辅助元素：定时器实体
theme: on                                    ## 可选on、off、或者函数返回值如'[[[ return theme() ]]]'
auto_show: false                             ## 当有此选项时，空调关闭时，卡片隐藏
width: 100%                                  ## 卡片宽度，可省略，默认100%
buttons:                                     ## 附加按钮：辅热、节能、干燥、睡眠、提示音、指示灯等，没有可省略
  -…
