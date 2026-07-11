---
repo: "koul777/VHLookup"
name: "VHLookup"
description: "Local-only Excel automation tool for public admin workflows"
originalDescription: "Local-only Excel automation tool for public admin workflows"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/koul777/VHLookup"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 31
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-02T12:50:50Z"
lastCommitAt: "2026-07-11T05:57:54Z"
lastReleaseAt: "2026-07-11T05:43:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 40
maintainers: ["koul777"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcbe97b88a109a1758a8b60221baca78d528e2ca488676f7a9007dd0a246dc8c/koul777/VHLookup"
---

# VHLookup Local V1.4

## Update History

### V1.4 (2026-07-11)

- Added custom order sorting with feature 7. After uploading the file and selecting a column, it retrieves the unique values of that column and sorts the entire rows according to the order in which the user moves those values up/down.
- It can be used not only for department hierarchy but also for columns with desired work orders such as status, grade, and classification.
- Added sample for feature 7 and before/after comparison images.

### V1.3 (2026-07-06)

- Personal data masking: Automatically recognizes personal data columns and displays them with checkboxes. Automatically recognized columns are pre-checked, and you can uncheck them to exclude or check additional columns for masking.
- Personal data masking: Masking values are displayed as `*` for the number of original characters. For example: `홍길동` → `***`, `010-1234-5678` → `*************`
- File merging: Added option to select a key column. Column merging uses the selected key column as the key column, and row merging sorts by the order of key column values.
- File merging: Directly specified key column for merging works similarly to VLOOKUP, appending all…
