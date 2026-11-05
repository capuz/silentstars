---
repo: "IBM/data-privacy-toolkit"
name: "data-privacy-toolkit"
description: "Data Privacy Toolkit"
readmeQualityOk: true
url: "https://github.com/IBM/data-privacy-toolkit"
language: "Java"
languages: ["Java"]
languagePcts: [93]
stars: 46
forks: 7
openIssues: 14
closedIssues: 79
watchers: 3
contributors: 14
recentReleases: 1
createdAt: "2022-12-06T18:53:56Z"
lastCommitAt: "2026-11-05T11:25:26Z"
lastReleaseAt: "2026-08-26T11:55:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 56
maintainers: ["stefano81", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0499a63a9565f5c819149be19fce6c888c36dcfc79badc92d155b8e02a086cb/IBM/data-privacy-toolkit"
---

# IBM Data Privacy Toolkit (DPT)

The IBM Data Privacy Toolkit, (formerly known as Privacy Masking and Anonymization, or PRIMA) is a toolkit for data type identification, privacy risk assessment, data masking and data anonymization that is exposed as a Java/Scala library and as a REST API.
The toolkit consists of four main components:
- **Type identification**
- **Masking providers**
- **Privacy risk assessment**
- **Anonymization providers**

Each feature will be briefly described in the remaining of this text.

## Type identification
Our toolkit provides a type identification mechanism that frees the user from the burden of specifying the types of the fields of the data to be analysed.
This is a core feature of our toolkit for it was designed to operate in a modern infrastructure where dynamic and heterogeneous schema coexist.
Our toolkit identifies more than 30 types; from general types like name, race, date and time to industry-specific attributes like ICD codes (medical diseases) and credit card numbers.
The type identification mechanism is extensible; it provides a programming interface for users to implement their own identifiers based on either regular expressions or…
