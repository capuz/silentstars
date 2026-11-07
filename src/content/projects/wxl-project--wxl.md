---
repo: "wxl-project/wxl"
name: "wxl"
description: "WXL (WinUI Xaml-Less): A modern C++23 library for declarative, Flutter-style WinUI 3 development. Powered by C++ modules and stripped of heavy winrt bloat, it brings simplicity and control back to native C++ GUI apps."
readmeQualityOk: true
url: "https://github.com/wxl-project/wxl"
homepage: "https://wxl-project.github.io/wxl/"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T13:37:42Z"
lastCommitAt: "2026-11-07T08:38:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["dmitry-valyukov"]
openGraphImageUrl: "https://opengraph.githubassets.com/af9e3f18de953903448c18b5290e6b47bb52675c2debd9a991319071d8aa346a/wxl-project/wxl"
---

# wxl

*English version: [README-EN.md](https://github.com/wxl-project/wxl/blob/HEAD/README-EN.md)*

**wxl (WinUI XAML-Less)** — экспериментальная C++23 библиотека для разработки
настольных приложений под Windows. Позволяет декларативно описывать
интерфейс **WinUI** непосредственно в исходном коде, не прибегая к XAML.

Архитектура библиотеки базируется на собственном генераторе проекций
**winui-srcgen**: на основе метаданных `.winmd` и конфигурационного профиля он
создаёт легковесные обёртки только для требуемых типов. Все
демонстрационные приложения представляют собой классические неупакованные
исполняемые файлы (`unpackaged Win32`), которые готовы к запуску
непосредственно из директории сборки без предварительного развёртывания.

## Документация

Полная документация доступна как в виде
[онлайн-справочника](https://wxl-project.github.io/wxl/index.html), так и
локально в каталоге `docs/`:

- **Архитектура и слои:** обоснование инженерных решений и разбор
  структуры — [`docs/index.md`](https://github.com/wxl-project/wxl/blob/HEAD/docs/index.md) |
  [Web](https://wxl-project.github.io/wxl/index.html)
- **Развёртывание:** инструкции по сборке и интеграции библиотеки в сторонние…
