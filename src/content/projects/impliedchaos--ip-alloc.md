---
repo: "impliedchaos/ip-alloc"
name: "ip-alloc"
description: "IP address allocation by country."
readmeQualityOk: true
url: "https://github.com/impliedchaos/ip-alloc"
homepage: "https://impliedchaos.github.io/ip-alloc/"
language: "HTML"
languages: ["HTML"]
languagePcts: [85]
stars: 15
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-02-23T15:30:22Z"
lastCommitAt: "2026-07-17T05:59:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 68
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/192198aa971273148605c2e1946037190c8dcdcdcea6092c9e02431d67a5b332/impliedchaos/ip-alloc"
---

# ip-alloc



You can view the generated data at [this link](https://impliedchaos.github.io/ip-alloc/).  It is generated daily.

I needed a count of IP addresses allocated by country.  Wikipedia has [this page](https://en.wikipedia.org/wiki/List_of_countries_by_IPv4_address_allocation),
but it's out of date.

So I made this instead.

## Sources

* Population and Country name data comes from geoname.org's [countryInfo.txt export file](https://download.geonames.org/export/dump/countryInfo.txt).
* IP Address counts come from the latest delegation statistics of all 5 RIRs:
  * AFRINIC <https://ftp.afrinic.net/pub/stats/afrinic/delegated-afrinic-extended-latest>
  * APNIC <https://ftp.apnic.net/stats/apnic/delegated-apnic-extended-latest>
  * ARIN <https://ftp.arin.net/pub/stats/arin/delegated-arin-extended-latest>
  * LACNIC <https://ftp.lacnic.net/pub/stats/lacnic/delegated-lacnic-extended-latest>
  * RIPE NCC <https://ftp.ripe.net/ripe/stats/delegated-ripencc-extended-latest>
* The contents of the `iana.lst` file comes from the [IANA IPv4 Special-Purpose Address…
