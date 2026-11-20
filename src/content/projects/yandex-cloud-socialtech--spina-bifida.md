---
repo: "yandex-cloud-socialtech/spina-bifida"
name: "spina-bifida"
description: "Application for analyzing signs of central nervous system pathology on ultrasound scans of pregnant women"
originalDescription: "Приложение для анализа признаков патологии центральной нервной системы на УЗИ беременных женщин"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/yandex-cloud-socialtech/spina-bifida"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2024-08-15T17:41:55Z"
lastCommitAt: "2026-11-20T12:22:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 30
maintainers: ["epopoff"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9c26030f52fcee00a4fd70b1fbc4f718ad9fe369252dff57a206fabf1c1983b/yandex-cloud-socialtech/spina-bifida"
---

# Spina Bifida

Web application for analyzing fetal ultrasound frames for signs associated with Spina Bifida: Flask API, React/TypeScript, SQLite, and a separate ML worker. The application determines the plane and region of interest, assesses frame quality, and shows a pathology feature signal and a Grad-CAM++ heatmap.

The model's output is a preliminary technical assessment that does not replace a specialist's clinical conclusion. The model score is not a calibrated probability of diagnosis.

Joint development:

- [Yandex Cloud](https://yandex.cloud/ru);
- [School of Data Analysis](https://shad.yandex.ru/);
- “Spina Bifida” Charitable Foundation (https://helpspinabifida.ru/) — [helpspinabifida.ru](https://helpspinabifida.ru/);
- [V.I. Kulakov National Medical Research Center for Obstetrics, Gynecology and Perinatology](https://ncagp.ru/).
