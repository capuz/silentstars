---
repo: "h0rn3t/docx2pdf"
name: "docx2pdf"
description: "A pure Go library for converting Office Word (.docx)  to PDF"
readmeQualityOk: true
url: "https://github.com/h0rn3t/docx2pdf"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-07-05T12:38:59Z"
lastCommitAt: "2026-11-24T14:09:44Z"
lastReleaseAt: "2026-11-17T13:17:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 26
maintainers: ["h0rn3t"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecfb2699f4503f93ad1b7d9e07f2fceb2c01b5134e6c45bbc92598ddb7a8ef41/h0rn3t/docx2pdf"
---

# docx2pdf

**Конвертація документів Word (.docx) у PDF на чистому Go.** Без cgo, LibreOffice
чи headless-браузера: програма збирається в один бінарник і нічого не запускає поруч.

- Кирилиця з коробки: шрифти вбудовано, тож відкритий PDF не покаже «кракозябр».
- Розмітка близька до Word: табуляція, межі абзаців, розрідження, таблиці, колонтитули, виноски.
- Підходить для сервісів: читає з пам'яті, пише в `io.Writer`, вхідний .docx
  вважається недовіреним.
- Відтворюваний вихід: однаковий .docx дає однакові байти PDF.

Мета — читабельний документ, що збігається з Word за розміткою рядків і сторінок,
а не піксель у піксель.

## Зміст

- [Встановлення](#встановлення)
- [Швидкий старт](#швидкий-старт)
- [Командний рядок](#командний-рядок)
- [Що підтримується](#що-підтримується)
- [Обмеження](#обмеження)
- [Безпека](#безпека)
- [Ліцензія](#ліцензія)

## Встановлення

```sh
go get github.com/h0rn3t/docx2pdf@latest
```

Потрібен Go 1.27 або новіший.
