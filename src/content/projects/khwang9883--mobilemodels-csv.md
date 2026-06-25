---
repo: "KHwang9883/MobileModels-csv"
name: "MobileModels-csv"
description: "CSV for https://github.com/KHwang9883/MobileModels"
url: "https://github.com/KHwang9883/MobileModels-csv"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 180
forks: 26
openIssues: 1
closedIssues: 3
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2024-03-09T13:28:03Z"
lastCommitAt: "2026-06-25T02:07:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 37
maintainers: ["KHwang9883"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c2d6fa8fa33c326bb0a1708eac43c0a0f3d08e6c574c3f8897fd90df1b091f3/KHwang9883/MobileModels-csv"
---

# MobileModels-csv
这是 https://github.com/KHwang9883/MobileModels 的 csv 格式版本，使用 GitHub Actions 自动生成并更新。

## gen_csv.py 脚本说明
这是用于将 markdown 格式的设备型号介绍转为 csv 格式的 python 脚本。  
输出列：设备编号，设备类型，品牌代码，品牌名，型号编码，型号昵称，型号名称，版本名称  

**设备编号 (model)**  
能从浏览器 UserAgent 中获取到的设备编号，如`华为 P40` 对应 `ANA-AL00`  
一个 model 可能对应多个版本，也可能多个 model 对应一个版本。  
**设备类型 (device_type)**  
包含：手机、手表、平板、电视、电视盒子、笔记本、pod 等  
对应 csv 的值：mob,watch,pad,tv,tv_hub,computer,pod  
会从一级标题、二级标题、加粗行中尝试提取。如果一级标题不存在则置为空，如果有多个二级标题，后面的二级标题（或加粗行）未检测到有效设备类型，会使用前面的设备类型。  
**品牌代码 (brand)**  
从 brands 目录下的文件名中提取第一个单词  
**品牌名 (brand_title)**  
从一级标题中按正则提取  
**型号编码 (code)**  
从加粗行的前面中括号中提取  
**型号昵称 (code_alias)**  
从加粗行的尾部小括号中提取  
**型号名称 (model_name)**  
从加粗行去掉 code 和 code_alias 后剩余的内容  
**版本名称 (ver_name)**  
从 model 行，提取冒号之后的内容，再去掉 model_name 的重合部分，只保留版本信息  
~~有些版本名称可能没有完全包含 model_name，而是只包含其中一部分，还有些可能完全没包含model_name~~  
~~输出 ver_name 中，如果包含 model_name，然后去掉了一部分，则规定以"#"开头。~~  
~~如果有多个 model_name，且包含的不是第1个，则"#"前面会添加索引~~  
~~例如 `CPH2413` 对应 `一加 10T 印度版`，但所属的型号是 `一加 Ace Pro / 一加 10T`，有两个，和第二个型号相同，所以版本中去掉相同的 `一加 10T`部分，变成 `#印度版`，又因为对应的型号是第二个，索引是1，故最后是 `1#印度版`~~  

## 鸣谢
- 感谢…
