---
repo: "Nanxzi/nju_electric_monitor"
name: "nju_electric_monitor"
description: "[Nanjing University Electricity bill 南大宿舍电费记录-Github自动运行] 宿舍的电费账单只能通过应用程序/网站来查看，很难追踪电费的变化情况。这可以通过在GitHub工作流中实现自动化 (达到阈值发送邮件)，或者在本地运行批处理文件。"
readmeQualityOk: true
url: "https://github.com/Nanxzi/nju_electric_monitor"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["html", "nju", "python", "billing", "electric"]
stars: 6
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-28T05:13:00Z"
lastCommitAt: "2026-08-28T12:23:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 87
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/035bacc6ec62067a9b22c43cebae77ae36dd1d894fcbdcc3b76e59459778b08d/Nanxzi/nju_electric_monitor"
---

# 南京大学电费监控脚本

这是一个用于监控南京大学电费充值页面剩余电量的Python脚本，并提供可视化网页面板。

[点击查看电量数据表（CSV）](https://github.com/Nanxzi/nju_electric_monitor/blob/HEAD/data/electricity_data.csv)

## 🌟功能特性

- 自动登录南京大学电费充值系统
- **支持两种验证方式**：传统验证码（ddddocr OCR）和滑块验证（captcha-recognizer AI识别）
- **自动检测验证方式**：智能识别当前页面是验证码还是滑块，自动切换处理流程
- **多轮重试机制**：传统验证码（外层×内层）和滑块验证（完整流程重试）确保高成功率
- **ChromeDriver 自动匹配**：本地版本不匹配时自动回退 Selenium Manager 下载
- 提取剩余电量信息
- 支持无头模式运行
- 数据保存为JSON和CSV格式
- 详细的日志记录
- **可视化网页面板，支持交互式电量曲线与数据表格**
- 一键批处理启动与网页自动打开

> 📖 **完整使用指南**：请查看 [GUIDE.md](https://github.com/Nanxzi/nju_electric_monitor/blob/HEAD/GUIDE.md)，包含详细的安装部署、配置说明、验证机制详解、故障排除和开发指南。

## 🤖Github Actions 自动运行

本项目已集成 Github Actions 自动定时监控与数据更新，无需本地部署即可自动采集和推送电量数据。

- 自动定时任务：每天多次自动运行，采集电量数据并推送到仓库。
- 自动安装依赖、中文字体、ChromeDriver、Tesseract OCR。
- 自动生成数据文件和可视化图片。
- 运行日志和数据自动提交到仓库。

**如何启用/配置自动运行：**

1. 在仓库设置 Secrets，添加 `NJU_USERNAME` 和 `NJU_PASSWORD`。
2. config_workflow.json中可以配置参数，`NJU_USERNAME` 和 `NJU_PASSWORD`不变即可
3. Actions 会自动拉取凭据并运行，无需手动操作。
4. 可在 Actions 页面查看运行日志和结果。

config_workflow.json 部分参数：

- `captcha_retry_count`: 验证码识别重试次数（建议 3–10 次，当前示例为 4）
- `save_captcha_images`: 是否保存验证码图片用于调试（默认 true）
- `test_mode`: 是否在关键步骤保存页面快照到…
