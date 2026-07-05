---
repo: "hotakutsuki/minichess"
name: "minichess"
description: "A minichess game in flutter"
readmeQualityOk: true
url: "https://github.com/hotakutsuki/minichess"
language: "Dart"
languages: ["Dart"]
languagePcts: [85]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-09-27T01:23:32Z"
lastCommitAt: "2026-07-05T20:17:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 57
maintainers: ["hotakutsuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c0430058b6b2bf04083a9ea20d7295be4c30f0bd6703b9d0104036261181315/hotakutsuki/minichess"
---

# 'Inti: The Inka Chess Game'
A minichess game in flutter

try it out:
https://inkachess.com/
also:
https://minichess-34a02.firebaseapp.com/
or
https://hotakutsuki.github.io/minichess/

to run debug:
flutter run -d chrome --web-renderer canvaskit

To web deploy:
run: "flutter build web --web-renderer canvaskit --release"
copy /build/web => /docs.
(you can overwrite index.html)
then run: "firebase deploy --only hosting"

To build android app abb:
1. increase version on pubspec.yaml
2. increase version on credits_view.dart (To be enhanced)
3. Build>flutter>build app bundle
