---
repo: "thomasleplus/cyberchef-recipes"
name: "cyberchef-recipes"
description: "A few useful CyberChef recipes."
readmeQualityOk: true
url: "https://github.com/thomasleplus/cyberchef-recipes"
homepage: "https://gchq.github.io/CyberChef/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bookmarks", "cyberchef", "cyberchef-recipes", "cybersecurity", "links"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-06T19:15:39Z"
lastCommitAt: "2026-07-09T20:45:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 61
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/16fafda65b02878d2c97a57dd277770a4a5978b360d2c4546d9bdd9a71ff0c12/thomasleplus/cyberchef-recipes"
---

# cyberchef-recipes

A few useful CyberChef recipes.

## JWT Decode

This is the recipe to decode a JWT token. The steps are:

1. URL decoding
2. Base64 decoding (for each section)
3. Remove the signature blob
4. JSON formating (easier to read)

[Try it!](https://github.com/thomasleplus/cyberchef-recipes/blob/HEAD/<https://gchq.github.io/CyberChef/#recipe=URL_Decode(true)Fork('.','%5C%5Cn',false)From_Base64('A-Za-z0-9%2B/%3D',true,false)Filter('Line%20feed','%5E%7B.*%7D$',false)JSON_Beautify('%20%20%20%20',false,true)&input=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lJeE1qTTBOVFkzT0Rrd0lpd2libUZ0WlNJNklrcHZhRzRnUkc5bElpd2lhV0YwSWpveE5URTJNak01TURJeWZRLlNmbEt4d1JKU01lS0tGMlFUNGZ3cE1lSmYzNlBPazZ5SlZfYWRRc3N3NWM>)

[jwt.io](https://jwt.io/) is probably a better alternative but the
above recipe can be a starting point if you're going to do further
operations on the decoded JWT.

## SAML Decode

This is the recipe to decode a SAML assertion. The steps are:

1. URL decoding
2. Base64 decoding
3. Decompression
4. XML formating (easier to read)

[Try…
