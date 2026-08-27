---
repo: "lanxiuyun/Catrace"
name: "Catrace"
description: "Catrace: Every notify is a Plugin"
readmeQualityOk: true
url: "https://github.com/lanxiuyun/Catrace"
homepage: "https://lanxiuyun.github.io/Catrace/"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [48, 32]
topics: ["break-reminder", "dashboard", "desktop-app", "health", "keyboard-activity", "mouse-tracking", "privacy-first", "productivity", "rust", "tauri"]
stars: 88
forks: 12
openIssues: 6
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-05-24T04:24:16Z"
lastCommitAt: "2026-08-27T14:20:24Z"
lastReleaseAt: "2026-06-02T02:08:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 35
maintainers: ["lanxiuyun", "lanxiuyunO", "vladelaina"]
openGraphImageUrl: "https://opengraph.githubassets.com/48bfcb9c121e2dedf8ae375cf85a7a9903f40d10f0468ad145b507cdac2e627b/lanxiuyun/Catrace"
---

</p>

<h1 align="center">Catrace</h1>

  <strong>桌面事件系统 · 插件运行时</strong><br>
  休息提醒 · Agent通知 · 定时提醒 · 插件生态
</p>

  </a>
  </a>
  </a>
</p>

    ⬇️ <strong>点击下载最新版本</strong>
  </a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
    🏠 <strong>官网主页</strong>
  </a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
    💖 <strong>觉得有用就 star 一下吧~</strong>
  </a>
</p>

</p>

## 它是干嘛的

**Catrace** 右下角会弹出你需要知道的消息——久坐提醒你休息，插件推送新动态（AI 进度、GitHub、手机消息）。

现在装好就能用的功能：

- **久坐提醒** — 很多人一坐电脑前就是几个小时，等反应过来已经腰酸背痛了。它会观察你的鼠标键盘有没有动静，发现你连续工作太久，就提醒你站起来活动一下。嫌卡片提醒太温柔？还可以选全屏盖住屏幕，逼你起来歇会儿。
- **定时提醒** — 自己定间隔，比如每小时喝口水；或者定每天固定时间，比如下班前想起打卡。

想更强大？Catrace 可以「加装」更多功能（叫插件），装上就有：

- **AI 助手动态** — 你在用 Claude、Codex 这类 AI 编程工具时，它能弹卡片告诉你「AI 干到哪一步了」「要你授权什么」，不用切回终端盯着看。适合 AI 编程重度用户。
- **蓝牙耳机听歌** — 耳机一连上电脑，自动弹出通知或帮你打开听歌软件；断开时按你的设置暂停或关闭。
- **GitHub 动态** — 有人给你提了 issue 或点赞，弹卡片提醒你。
- **手机消息转发** — 安卓手机来短信或 App 通知，自动转发到电脑桌面弹卡片（需搭配 SmsForwarder 转发工具）。

**插件生态** — 内置功能开箱即用，想装的插件可以从本地文件夹或压缩包安装，随用随开、不用就关。

## 它怎么知道你在忙

放心，它不拍你屏幕，也不看你文件。它只靠两件事判断你忙不忙：

- **你的鼠标和键盘** — 动没动、动了多久。
- **你正开着哪个软件** — 是写代码的编辑器，还是视频播放器。

规则很简单：

- 从你今天第一次碰鼠标键盘开始计时。
- 中间去倒杯水、回个消息、发个呆，只要没歇够一段时间，它都当你还在工作节奏里。
- 只有你真的停下来、连着好几分钟一动不动，它才认定你在休息，并记下来。
- 一口气忙满一个「工作窗口」（比如 45 分钟）没歇够，或者歇完又忙满一个窗口，它就弹卡片提醒你：该起来活动啦。…
