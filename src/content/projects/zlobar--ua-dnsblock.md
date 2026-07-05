---
repo: "zlobar/ua_dnsblock"
name: "ua_dnsblock"
description: "Blocked domain names, according to the relevant orders, on the provider's recursive servers"
originalDescription: "Заблоковані, за відповідними розпорядженнями, доменні імена, на рекурсивних серверах провайдера"
descriptionLang: "uk"
readmeQualityOk: true
url: "https://github.com/zlobar/ua_dnsblock"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-04-26T10:45:21Z"
lastCommitAt: "2026-07-05T20:55:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 68
maintainers: ["zlobar", "github-actions[bot]", "formatj"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bd60f00f545c4426646240281b8d1c0d8c34f340b4dbbd2a6bc3d0d2617efb1/zlobar/ua_dnsblock"
---

blocklist/
------
Domain names subject to blocking according to [NCU Orders](https://cip.gov.ua/ua/filter?tagId=60751), decisions of [NCEC](https://nkek.gov.ua/calendar/decisions?&page=1), [NSDC](https://www.rnbo.gov.ua/ua/Documents/), [National Council](https://webportal.nrada.gov.ua/decisions/), [PlayCity Agency](https://playcity.gov.ua/rozporiadchi-dokumenty-pleisiti?&act_section_id=7), [Presidential Decrees of Ukraine](https://www.president.gov.ua/documents/decrees)

whitelist/
------
Domain names that were previously blocked and are subject to unblocking

List of blocked domain names
------

https://raw.githubusercontent.com/zlobar/ua_dnsblock/main/domains.txt

BIND9 DNS server configuration
------

1) download https://raw.githubusercontent.com/zlobar/ua_dnsblock/main/named.conf.blocked
2) include it in the config named.conf **include "/etc/bind/named.conf.blocked";**

Unbound DNS server configuration
------

1) download https://raw.githubusercontent.com/zlobar/ua_dnsblock/main/unbound.conf.blocked
2) include it in the config unbound.conf **include-toplevel: "/etc/unbound/unbound.conf.d/*"** (or another path where it will be)

_Updated as of 05.07.2026_
