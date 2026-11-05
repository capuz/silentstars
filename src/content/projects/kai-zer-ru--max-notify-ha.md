---
repo: "kai-zer-ru/max-notify-ha"
name: "max-notify-ha"
description: "MaxNotify - integration for sending messages to the MAX messenger from Home Assistant"
originalDescription: "MaxNotify - интеграция для отправки сообщений в мессенджер MAX из Home Assistant"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/kai-zer-ru/max-notify-ha"
homepage: "https://kai-zer.ru"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["homeassistant", "homeassistant-integration", "max"]
stars: 73
forks: 5
openIssues: 0
closedIssues: 24
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-11T06:44:46Z"
lastCommitAt: "2026-11-05T14:06:26Z"
lastReleaseAt: "2026-04-01T11:29:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 36
maintainers: ["kai-zer-ru", "ayushkrsingh946"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcccfeb963322769d26c377a233ad955b2ebffbf7b54778879d287bfc881b29c/kai-zer-ru/max-notify-ha"
fundingLinks: ["CUSTOM:https://dzen.ru/kai_zer_ru?donate=true", "CUSTOM:https://t.me/boost/kai_zer_ru_public", "CUSTOM:https://www.tbank.ru/rm/r_wKLcbFgjYa.ncgWMwrHSA/vyQvd5941/"]
---

# MaxNotify for Home Assistant

**MaxNotify** connects the **Max** messenger to Home Assistant: you can send messages, photos, files and videos to chats and, optionally, react to incoming messages and button presses in automations. Setup is done through the Home Assistant interface, without editing configuration files for the integration itself.

The integration works in **two ways**: with the **official API** of the Max platform, and through the **notify.a161.ru** service (a simplified option for those who use it). Both options are configured in the wizard when you add an entry.

**Home Assistant 2026.2.0 or newer** is supported (older releases may not work correctly).

---

## Contents

- [Community and support](#сообщество-и-поддержка)
- [Important to know about Max and notify.a161.ru](#важно-знать)
- [Notification behavior and channels](#поведение-уведомлений-и-каналы)
- [What the integration can do](#что-умеет)
- [What you will need beforehand](#что-понадобится)
- [Installation](#установка)
- [Mintsifry certificates (platform-api2.max.ru)](#сертификаты-минцифры-platform-api2maxru)
- [Initial setup](#первичная-настройка)
- [Receiving messages and automations](#приём-сообщений)…
