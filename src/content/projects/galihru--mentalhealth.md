---
repo: "galihru/MentalHealth"
name: "MentalHealth"
description: "A comprehensive mental health monitoring application using modern web technologies."
readmeQualityOk: true
url: "https://github.com/galihru/MentalHealth"
homepage: "https://galihru.github.io/MentalHealth/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [27, 23]
topics: ["ai", "android-application", "arduino-ide", "deep-learning", "esp32", "mechine-learing", "mental-health", "webapp"]
stars: 22
forks: 3
openIssues: 12
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-02-04T07:13:31Z"
lastCommitAt: "2026-08-25T04:09:40Z"
lastReleaseAt: "2025-02-20T05:38:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 54
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/2de6b7ee8c6d9b95404ec0cea3b1f744a2156720e0d1139068156411d84de6ba/galihru/MentalHealth"
---

# Mental Health Application Based Face Recognition

## Key Features:
- **Emotion Detection**: Analyzes user's facial expressions to identify emotions.
- **Personalized Recommendations**: Provides suggestions based on the user's emotional state.
- **Professional Integration**: Notifications to contact mental health professionals if needed.

## Formulation
1. **Hash Function (djb2Hash)**

The hash function is used to generate a unique `FaceID` based on facial landmarks. The formula for the hash function is:

$$
\text{hash} = 5381 \\
\text{for each character } i \text{ in the string:} \\
\text{hash} = (\text{hash} \times 33) + \text{charCodeAt}(i) \\
\text{return hash } >> 0 \text{(unsigned 32-bit integer)}
$$

2. **Lip Stretch Calculation (Happiness)**

The lip stretch is calculated using the Euclidean distance between the left and right lip corners:

$$
\text{lipStretch} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

3. **Cheek Raise Calculation (Happiness)**

The cheek raise is calculated as the vertical distance between the cheek and eye landmarks:

$$
\text{cheekRaise} = y_{\text{eye}} - y_{\text{cheek}}
$$

4. **Lip Depression Calculation (Sadness)**

The lip depression is…
