---
repo: "Di1r1/entware-manager"
name: "entware-manager"
description: "Entware Manager for Keenetic/Netcraze router"
readmeQualityOk: true
url: "https://github.com/Di1r1/entware-manager"
language: "HTML"
languages: ["HTML", "Go"]
languagePcts: [39, 32]
stars: 30
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-27T15:37:24Z"
lastCommitAt: "2026-08-29T17:28:20Z"
lastReleaseAt: "2026-07-30T17:04:01Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 35
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c6872dc0b1699b3449642e76a1c2f45c6946e6e1a635f82dde99eedd38d11004/Di1r1/entware-manager"
---

# Entware Manager

**Entware Manager** — веб-панель управления Entware на роутерах Keenetic и Netcraze с NDMS.
Всё в браузере, без SSH и консоли.

### Возможности

| Раздел | Что умеет |
|--------|-----------|
| **Пакеты** | Установка, удаление, обновление пакетов Entware. Поиск, список установленных, список доступных обновлений |
| **Мониторинг** | CPU/RAM/диск, температура CPU и WiFi, история температур за 7 дней с графиками. Встроенный watchdog (перезапуск упавших процессов) |
| **Сеть** | Интерфейсы, маршруты, ARP-таблица. Мониторинг трафика (real-time). Watchdog: пинг шлюза/8.8.8.8, сброс интерфейса при потере связи |
| **Сервисы** | Управление сервисами (start/stop/restart/enable/disable). Мониторинг процессов, автоперезапуск по PID |
| **SMART** | S.M.A.R.T. атрибуты дисков (HDD/SSD/NVMe), health-статус, самотесты, температура накопителей |
| **Логи** | Просмотр системных логов, поиск, ротация, очистка |
| **Файлы** | Просмотр файлов в `/tmp/`, backup/restore настроек |
| **Терминал** | Встроенный веб-терминал (ttyd) для прямого доступа к shell |
| **RDP** | Веб-RDP-клиент (grdpwasm) для подключения к компьютерам в LAN: доступ к любому ПК в разрешённых подсетях, клипборд,…
