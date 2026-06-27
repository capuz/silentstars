---
repo: "superdaobo/mini-hbut"
name: "mini-hbut"
description: "湖北工业大学教务助手 基于 Tauri + Capacitor + Vue 3 的跨平台客户端应用"
url: "https://github.com/superdaobo/mini-hbut"
homepage: "https://hbut.6661111.xyz"
language: "Vue"
languages: ["Vue", "TypeScript", "Rust"]
languagePcts: [31, 22, 22]
stars: 27
forks: 3
openIssues: 0
closedIssues: 36
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-20T03:46:38Z"
lastCommitAt: "2026-06-27T00:35:59Z"
lastReleaseAt: "2026-01-25T14:45:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["dependabot[bot]", "superdaobo"]
openGraphImageUrl: "https://opengraph.githubassets.com/d67b276713443f1aadb5f21ff6b82d8368b2b044d9357524baa59bf1ca5f8886/superdaobo/mini-hbut"
---

# Mini-HBUT 桌面/移动端应用

</p>

  <b>湖北工业大学教务助手</b><br>
  基于 Tauri + Capacitor + Vue 3 的跨平台客户端应用
</p>

  </a>
  </a>
  </a>
</p>

</p>

## ✨ 功能特性

### 🎓 教务核心

- 📊 **成绩查询**：学期成绩、GPA、变更检测与缓存读取
- 📅 **课表查询**：当前周/全学期课表，支持静默刷新
- 📝 **考试安排**：考试列表 + 次日考试提醒
- 🏫 **空教室查询**：按时间段筛选可用教室
- 📈 **排名查询**：班级/专业/年级排名
- 🎯 **学业进度**：培养方案完成进度、学分统计
- 📆 **校历**：学期周次与校历信息

### 🏕️ 校园生活与资源

- 🔋 **电费查询**：宿舍房间缓存 + 余额实时请求
- 💳 **交易记录**：一码通流水查询与筛选
- 📚 **图书查询**：馆藏检索、详情、借阅状态
- 🗺️ **校园地图**：远程拉取 + 本地缓存
- 📁 **资料分享**：WebDAV 浏览、预览、下载、分享
- 🧾 **导出中心**：多模块导出 JSON / 图片 / 课表 ICS

### 🔔 通知与后台任务

- 🤫 **后台静默检查**：课表刷新、成绩变更、考试提醒、电费监控
- ⚡ **电费通知**：低于 10 度自动提醒，按房间缓存实时检查
- 🚫 **通知去重**：启动即时检查与签名去重，避免重复推送
- 📱 **Capacitor 后台任务**：`startOnBoot` + `stopOnTerminate=false` + `enableHeadless`
- 🤖 **Android 增强调度**：额外周期任务，提高被系统回收后触发机会

### ⚙️ 设置中心与体验优化

- 🧭 **远程/仅本地模式切换**：支持禁用远程覆盖
- 🌐 **本地服务地址配置**：OCR、临时上传服务器
- 🧪 **功能测速**：OCR/上传/门户/教务/超星/一码通/图书馆延迟检测
- 🧩 **模块参数自动应用**：超时、重试、并发线程等改动自动保存并生效
- 🔒 **固定模块目标地址**：内置默认地址，不在前端开放编辑

### 🔤 字体与运行时 CDN 缓存

- 🎨 **字体系统**：默认/黑体/宋体/楷体/仿宋/得意黑
- 🚀 **字体 CDN 线路切换**：自动（jsDelivr → unpkg）/ jsDelivr / unpkg
- 📦 **预缓存字体（含得意黑）**：可视化下载流程与失败重试
- 💾 **字体持久化**：每次启动自动恢复上次选择
- 🪶…
