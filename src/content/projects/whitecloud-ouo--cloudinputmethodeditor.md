---
repo: "WhiteCloud-OuO/CloudInputMethodEditor"
name: "CloudInputMethodEditor"
description: "云朵输入法 𝐂𝐥𝐨𝐮𝐝 𝐈𝐌𝐄 (based on 青简, modified) — a third-party input method focused on Windows"
originalDescription: "云朵输入法𝐂𝐥𝐨𝐮𝐝 𝐈𝐌𝐄（基于青简修改）——专注Windows系统的第三方输入法"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/WhiteCloud-OuO/CloudInputMethodEditor"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["ime"]
stars: 31
forks: 0
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 18
recentReleases: 7
createdAt: "2026-09-29T03:21:51Z"
lastCommitAt: "2026-11-07T09:30:45Z"
lastReleaseAt: "2026-10-20T12:35:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 59
undervaluedScore: 34
maintainers: ["WhiteCloud-OuO"]
openGraphImageUrl: "https://opengraph.githubassets.com/d03178a5222a43ed89931fdc47395e8a09de5594085603b20c75eea07aa9f66e/WhiteCloud-OuO/CloudInputMethodEditor"
---

Admittedly, 青简输入法 is powerful (candidate translation, cloud association support, advanced UI customization). But not everyone needs these features, so the approach of 云朵输入法 is to strip the add-on features out of core input. To do this, 云朵输入法 was almost entirely rebuilt on top of 青简输入法.
 - Gradually opening up a range of niche input schemes such as double-pinyin input, Wubi input, and Cangjie input. We are now trying to make some changes to suit more user choices, but this may be detrimental to the maintenance of the IME;
 - Optimized specifically for Chinese input: user dictionary management + official dictionaries + third-party dictionaries (which the user must configure themselves). Even without importing third-party dictionaries, ordinary users can use it out of the box;
 - All input actions are performed only on the local machine, and the input process does not connect to the internet (downloading and using Lua scripts does require internet access). It does not steal user privacy, and the code is fully open source;
 - Candidate translation has been changed to translating Tips: reducing visual clutter and serving only pure input functionality;
 - Provides Lua script support for…
