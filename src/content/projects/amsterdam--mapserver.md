---
repo: "Amsterdam/mapserver"
name: "mapserver"
description: "Mapserver configuration for various public datasets"
url: "https://github.com/Amsterdam/mapserver"
homepage: "https://map.data.amsterdam.nl/maps/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["mapserver", "wfs", "wms", "docker", "team-datadiensten"]
stars: 15
forks: 13
openIssues: 0
closedIssues: 0
watchers: 26
contributors: 57
recentReleases: 0
createdAt: "2015-10-19T12:22:48Z"
lastCommitAt: "2026-06-29T07:23:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 88
undervaluedScore: 63
maintainers: ["dependabot[bot]", "ekesgin", "Doldenburgamsterdam"]
openGraphImageUrl: "https://opengraph.githubassets.com/40176f2e64770b8e1a57c8887828250f0490abc3556750687d4e99ab0c947acb/Amsterdam/mapserver"
---

MapServer-configuratie voor map.data.amsterdam.nl.

# Vereisten

* [docker](https://docs.docker.com/index.html)
* [docker-compose](https://docs.docker.com/compose/install/)

# Opstarten

* Hernoem ``.env-example`` naar ``.env``
* Pas in ``.env`` de volgende parameters aan:
  * het pad aan waar je je Database DIR neer wil zetten
  * het wachtwoord om je database te verbinden
* Start de database: ``docker-compose up -d database``.
* Vul de gewenste tabellen in de database, die woont op localhost, poort 5403. 
* Bouw Docker image met MapServer: ``docker-compose build public``.
* Start de map met: ``docker-compose up -d public``.
* Vervang het password in ``dataservices.inc`` naar ``insecure``

Test nu of MapServer werkt:

    curl --head http://localhost:8383/maps/index.json

Als dit geen foutmelding geeft, dan kunnen kaarten nu benaderd worden als WFS
of WMS, via bijv. [QGIS](https://qgis.org). De kaarten hebben URL's zoals

    http://localhost:8383/maps/meetbouten?service=WMS&request=GetCapabilities

# Ontwikkelen

Zorg dat de database blijft draaien en voeg daarin data toe. Na elke wijziging
aan een mapfile moet de MapServer-container opnieuw worden opgebouwd en
opgestart volgens…
