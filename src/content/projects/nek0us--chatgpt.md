---
repo: "nek0us/ChatGPT"
name: "ChatGPT"
description: "a ChatGPT api,no web ui"
readmeQualityOk: true
url: "https://github.com/nek0us/ChatGPT"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 35
forks: 10
openIssues: 4
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-04-07T06:02:05Z"
lastCommitAt: "2026-08-01T06:15:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 56
maintainers: ["nek0us"]
openGraphImageUrl: "https://opengraph.githubassets.com/73be56c6675769a735d9871e46e5a6d971eb9b768b41e22e27e4a72310b39135/nek0us/ChatGPT"
---

# ChatGPT [](https://pypi.python.org/pypi/ChatGPTWeb)
ChatGPT playwright api,not openai api

一个不怎么使用网页的ChatGPT playwright api

# 待填坑 feature
-   [x] 使用网页版 chatgpt | use chatgpt
-   [x] 多人格预设与切换 | Multiple personality presets and switching
-   [x] 聊天记录存储与导出 | Chat history storage and export
-   [x] 自定义人设 | Customized persona
-   [x] 重置聊天或回到某一时刻 | Reset a chat or go back to a certain moment
-   [x] 多账号并发聊天 | Concurrent chatting with multiple accounts
-   [x] 使用账号登录（暂不支持苹果）| Log in with your account (Apple is not supported yet)
-   [x] GPT4 and PLUS
-   [x] GPT4 upload file
-   [ ] GPT4 download file
-   [ ] 代码过于混乱等优化 | The code is too confusing and other optimizations
-   [ ] 抽空完善readme | Take the time to improve the readme

# 安装/Install
linux & Windows

```bash
pip install ChatGPTWeb
playwright_firefox install firefox
```

### MsgData() 数据类型
```bash 
from ChatGPTWeb.config import MsgData

class MsgData(): 
    status: bool = False,
    msg_type: typing.Optional[typing.Literal["old_session","back_loop","new_session"]] = "new_session",
    msg_send: str = "hi",
    # your msg 
    gpt_model: typing.Literal["text-davinci-002-render-sha", "gpt-4", "gpt-4o"] =…
