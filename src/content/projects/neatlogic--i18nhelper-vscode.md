---
repo: "neatlogic/i18nhelper-vscode"
name: "i18nhelper-vscode"
description: "vscode extension for replace i18n key"
readmeQualityOk: true
url: "https://github.com/neatlogic/i18nhelper-vscode"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-03-20T06:38:29Z"
lastCommitAt: "2026-05-19T10:17:22Z"
status: "quiet"
tags: ["hidden_gem"]
healthScore: 40
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7eaf76809d568929b75ae1eb490fbb1bfd2b0e032dd30fe7f7b8b914096df2f6/neatlogic/i18nhelper-vscode"
---

中文 / [English](https://github.com/neatlogic/i18nhelper-vscode/blob/HEAD/README.en.md)

<p>

---

## 功能

自动转换选中文本为 i18n 中的 key，如果中文不存在，则自动往对应的 i18n 配置文件中写入 key 和文本内容。

## 使用要求

本插件要求 i18n 文件已经按类型组织起来，例如分别有两个 i18n 配置文件 page/zh.json 和 button/zh.json，分别管理页面翻译和按钮翻译，内部组织结构是：

page/zh.json:

```json
{
  "name": "名称",
  "age": "年龄"
}
```

button/zh.json

```json
{
  "submit": "提交",
  "delete": "删除"
}
```

页面引用：`$t('page.name')`或`$t('button.submit')`

```js
$t("page.name");
$t("button.submit");
```

如果你的 i18n 结构和上面类似，就可以使用本插件来管理 key 和文案。

## 使用方式

### 第一次使用

1. 在编辑器中打开右键菜单，点击 `i18nhelper: configure` 配置文件路径。

```json
{
  "i18nhelper": [
    {
      "type": "page",
      "path": "/src/resources/assets/languages/page/zh.json",
      "path_en": "/src/resources/assets/languages/page/en.json", //target language config file
      "path_jp": "/src/resources/assets/languages/page/jp.json" //target language config file
    },
    {
      "type": "button",
      "path": "/src/resources/assets/languages/button/zh.json",
      "path_en": "/src/resources/assets/languages/button/en.json", //target language config file
      "path_jp": "/src/resources/assets/languages/button/jp.json" //target language…
