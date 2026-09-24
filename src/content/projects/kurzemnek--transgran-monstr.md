---
repo: "kurzemnek/transgran-monstr"
name: "transgran-monstr"
description: "De-identifies CRM exports before sending to AI models. Phone numbers become hashes, customer linkage is preserved."
originalDescription: "Обезличивает выгрузки CRM перед отправкой в нейросети. Телефоны становятся хешем, склейка выживает."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/kurzemnek/transgran-monstr"
homepage: "https://kurzemnek.ru"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-09-24T07:23:03Z"
lastCommitAt: "2026-09-24T08:41:31Z"
lastReleaseAt: "2026-09-24T07:31:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 26
maintainers: ["UzzvenTor"]
openGraphImageUrl: "https://opengraph.githubassets.com/3baf7c37cb530e71e30ee4b826686042e33163ee5992e12e6eba3b3016286324/kurzemnek/transgran-monstr"
---

# CROSS-BORDER MONSTER

**Consumes personal data, leaves the money.**

<br>

</div>

---

## Why This

AI models live abroad. You can't send customer phone numbers and emails there — it's cross-border transfer of personal data, and the penalty starts at a million rubles.

But you want to send CRM exports to AI: it can calculate in a minute what takes a marketer a day.

The monster solves this simply: it consumes personal data **before** the file reaches the model. Phone numbers turn into hashes, names and free-form text disappear, money, dates, funnels, and UTM parameters remain untouched. What goes out are tokens by which a person cannot be identified.

Everything is calculated on your computer. The program doesn't send anything anywhere, it doesn't need internet.

## How to Use

1. Export anything from your CRM — CSV, Excel, even tab-separated.
2. Drag the file onto the program. Or several at once — it will process them in a batch.
3. Click **CONSUME PERSONAL DATA**.

Next to it will appear `name_anonymized.csv`, ready to send to the AI model.

Before that, the program shows a preview — a decision for each column:

```
PREVIEW
──────────────────────────────────────────────…
