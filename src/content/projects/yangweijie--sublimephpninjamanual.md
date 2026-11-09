---
repo: "yangweijie/SublimePHPNinJaManual"
name: "SublimePHPNinJaManual"
description: "Sublime中的函数手册提示，中文，其他语言的可以通过命令生成"
readmeQualityOk: true
url: "https://github.com/yangweijie/SublimePHPNinJaManual"
language: "PHP"
languages: ["PHP"]
languagePcts: [97]
stars: 44
forks: 6
openIssues: 0
closedIssues: 9
watchers: 4
contributors: 1
recentReleases: 3
createdAt: "2015-09-24T08:35:39Z"
lastCommitAt: "2026-11-09T04:34:14Z"
lastReleaseAt: "2026-11-09T04:35:07Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 38
maintainers: ["yangweijie"]
openGraphImageUrl: "https://opengraph.githubassets.com/6002dbf440a7d794d295e71fd27c3f6acf2f5ec6459f2b21f0a36da178a0b1d0/yangweijie/SublimePHPNinJaManual"
---

# SublimePHPNinJaManual
Sublime中的函数手册提示，中文，其他语言的可以通过命令生成

## 由来
自己因为sublime中没有一个好的php函数提示所苦恼。曾经在Sublime的thinkphp插件里实现过一次，  那个时候用的是netbeans 里 php提示的文件库，然后显示也不大好看。一直以为sublime 没法做到好看的ui 因为api少。

前几天发现了国人的自己做的[Ctranslator tool](https://packagecontrol.io/packages/Ctranslator%20tool)  这不就是我想要的吗？看源码发现是用了一个开源的库 [StyledPopup](https://github.com/huot25/StyledPopup)。 用html灵活多了。

而后，自己其实一直用的chrome 浏览器的插件，PHP NanJa Manual。支持各种语言，也有示列，就是每次写代码开浏览器太麻烦了。由于他提供一个开源库[PHP doc parser](https://github.com/martinsik/php-doc-parser)，可以将php官方手册转换成json文件，自己就有了移植的想法。

所以名字就参考了他的，希望不要告侵权。
由于son文件过于大，python没有缓存机制（或许我不知道），我就用thinkphp 转成了一个sqlite db。2个表 fun、funlist  fun存 函数名， funlist存 函数名和对应son数据。
## 安装
使用Sublime Text 3 Package Control 插件(http://wbond.net/sublime\_packages/package\_control) 按 CTRL + SHIFT + P 后 找到 _Package Control: Install Package_ 然后回车。列表中找到**PhpNinJaManual**这个插件（等审核过了会有）。

或者直接 git clone 到你的 Sublime Text 3 packages 目录 (usually located at /Sublime Text 3/Packages/)。记得把SublimePHPNinJaManual 改为PhpNinJaManual。pac 安装的应该没这个问题。

## 使用说明
选中要查看的php函数名，然后右键会发现 “查看函数说明”菜单 ，点击后，
会弹出函数说明浮层 

如果想配快捷键，只需要你自定义快捷键里 commond 写 `show_php_document`就行了，这个参考Sublime手册快捷键，自己定义一个就好了。比如 f1或者 其他。
## 关于手册其他语言的生成
拿英文 en 举例。…
