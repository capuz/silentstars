---
repo: "zetsr/Shadow-Gui"
name: "Shadow-Gui"
description: "The Best Immediate Mode GUI For Canvas"
readmeQualityOk: true
url: "https://github.com/zetsr/Shadow-Gui"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["gui", "hook", "imgui", "internal", "postrender", "ucanvas", "ue4", "ue5", "ucanvas-gui", "canvas-gui"]
stars: 20
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-07T15:05:42Z"
lastCommitAt: "2026-09-23T08:46:57Z"
lastReleaseAt: "2026-09-19T08:06:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 48
maintainers: ["zetsr"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2da74fdd9cad79c346a2b3f3210a1cfcb9bf1813f25207fbe3fff65646a31a4/zetsr/Shadow-Gui"
---

# ✨ Shadow Gui

欢迎大家 PR 各种好看的主题配色和控件样式，或者提交你们的使用示例代码！

## 效果展示 / Showcase

### ShowDemoWindow

### Nav UI

### AddCircleFilled

---

### ☕ 赞助 / Buy me a coffee

* 您可以通过赞助支持我们的开发，感谢大家的支持！
* If this project helps you, feel free to support my work!
* **USDT (TRC-20):** `THzBDDbBkDh3nXRkCEeG4p5r733tWeAdib`

---

## Credits

* [ocornut/imgui](https://github.com/ocornut/imgui)
* [Encryqed/Dumper-7](https://github.com/Encryqed/Dumper-7)
* [Google AI Studio](https://aistudio.google.com/)

---

## 使用方法 / Usage

### 快速开始 / Quick Start

#### 中文
* `#include "src/Shadow.h"`
* `#include "src/Shadow_Texture.h"`
* `#include "src/Shadow_Nav.h" // 如果需要 Nav UI`
* `#include "src/Shadow_Demo.h" // 如果需要 Demo Menu`
* 修改 `Shadow.h` 的 `#include "../external/CppSDK/SDK.hpp"` 为实际路径
* 在 `UGameViewportClient::PostRender` 运行 `Shadow::NewFrame(Canvas);`
* 在 `Shadow::NewFrame(Canvas);` 之后添加 `Shadow::Render();`

#### English
* `#include "src/Shadow.h"`
* `#include "src/Shadow_Texture.h"`
* `#include "src/Shadow_Nav.h" // if you need Nav UI`
* `#include "src/Shadow_Demo.h" // if you need Demo Menu`
* Modify `#include "../external/CppSDK/SDK.hpp"` in `Shadow.h` to the actual path
* Run `Shadow::NewFrame(Canvas);`…
