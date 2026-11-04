---
repo: "AlexandraZaychik/ToLiss-OANS"
name: "ToLiss-OANS"
description: "OANS for ToLiss A319/320/321/339/346, LaminarResearch A330, Zibo B737"
readmeQualityOk: true
url: "https://github.com/AlexandraZaychik/ToLiss-OANS"
language: "C++"
languages: ["C++", "Lua"]
languagePcts: [49, 38]
topics: ["airbus", "toliss", "oans", "a319", "a320", "a321", "a346", "a339", "b737", "boeing"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-26T11:45:06Z"
lastCommitAt: "2026-11-04T11:27:35Z"
lastReleaseAt: "2026-11-02T10:49:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 33
maintainers: ["AlexandraZaychik"]
openGraphImageUrl: "https://opengraph.githubassets.com/98e3017de69c449bb9c216151f22a408ccd2681526ddd99604a1b700f2e6786b/AlexandraZaychik/ToLiss-OANS"
---

# ToLiss-OANS

oans for:\
~ ToLiss all series\
~ Laminar Research B330\
~ Zibo A737\
some code from A350，with some small fix and small improve\
license under GPLv3, due to A350 get some idea from FBW A380 which is GPLv3

support function below:\
~ map with taxiline or taxiroute\
~ ground traffic\
~ mark item\
~ runway approaching advisory\
~ current position [option]\
oans only available when range select is 10NM

just for fun not an accurate simu of real 320 oans

for mac user, need to run\
[xattr -d com.apple.quarantine "xxx/64/mac.xpl]

------------

Q: how to install\
A: unpack zip. and put folder "00_ToLissOANS" into "X-Plane 12\Aircraft\ToLissA320\plugins". (prefix "00_" to ensure plugin init before FBW)

Q: if something wrong with custom acf file (eg. A319ceo.acf)\
A: try del "config/toliss/a319.json" and restart xp. if still not work. send me "A319ceo.acf" and "cockpit_INN.obj" and xplane log plz.

Q: mcdu2 strange behaviour\
A: plugin use mcdu2 to get active runway, takeoff&land&altern airport. can turnoff "auto get info from mcdu2"/leave text in mcdu2 to solve

thanks:\
CHOXON 2 CHOXOFF、heart4sck、KILO_333167、ricardo404

------------

20261024-1325Z update\
~ align menu…
