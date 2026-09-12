---
repo: "RixyPow/netzapret"
name: "netzapret"
description: "Диспетчер трафика для Windows: десинк, VPN или напрямую — для каждого приложения и домена"
readmeQualityOk: true
url: "https://github.com/RixyPow/netzapret"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-24T16:25:05Z"
lastCommitAt: "2026-09-12T08:04:06Z"
lastReleaseAt: "2026-08-30T09:31:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["RixyPow"]
openGraphImageUrl: "https://opengraph.githubassets.com/d026a7ccfb6b08fede4a632fc4bc04d755a460303dc7c0fafe8257de56e9d89f/RixyPow/netzapret"
fundingLinks: ["CUSTOM:https://boosty.to/rixypow/donate"]
discussionCount: 0
---

# NetZapret

Диспетчер трафика для Windows. Для каждого приложения, домена или подсети решает,
куда пустить трафик: **через десинк** (Zapret / winws2), **через VPN** (sing-box)
или **напрямую** — и запускает оба движка под одним присмотром.

Заменяет собой связку Zapret + VPN-клиент и делает то, чего не делает ни одна
из них по отдельности: **применяет VPN точечно, не ломая десинк для всего остального.**

## Установка

1. Скачать архив со страницы [релизов](https://github.com/RixyPow/netzapret/releases/latest).
2. Распаковать куда угодно.
3. Запустить `NetZapret.exe`.

Больше ничего ставить не нужно — ни .NET, ни sing-box, ни Zapret: всё внутри.
Права администратора программа запросит сама, без них не поднимутся ни туннель,
ни драйвер перехвата пакетов.

Понадобится только **ссылка на подписку VPN** — любой провайдер, поддерживаются
VLESS, Trojan, Hysteria2 и Shadowsocks. Вставляется в разделе «VPN».

Ссылка равносильна паролю: по ней выдаётся весь список серверов с учётными
данными. Хранится рядом с программой в `config\netzapret.json` и никуда
не отправляется.

### Бесплатный WARP

В разделе «VPN» есть выключатель «Бесплатный WARP». Ни почты, ни оплаты,
ни ключей: движок в…
