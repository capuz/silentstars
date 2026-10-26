---
repo: "Tatsh/mutt-oauth2"
name: "mutt-oauth2"
description: "Packaged, maintained version of contributed mutt_oauth2.py script."
readmeQualityOk: true
url: "https://github.com/Tatsh/mutt-oauth2"
homepage: "https://tatsh.github.io/mutt-oauth2/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["gmail", "mutt", "outlook", "email"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-30T23:44:25Z"
lastCommitAt: "2026-10-26T18:06:47Z"
lastReleaseAt: "2026-07-08T22:56:00Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 77
maintainers: ["dependabot[bot]", "Tatsh", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/896651620/eec2d870-875e-4fc2-84fe-8e85ff36cd35"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# mutt-oauth2

This is an update of [Alexander Perlis' script](https://github.com/muttmua/mutt/blob/master/contrib/mutt_oauth2.py)
and conversion to a package. Instead of using GPG for token storage, this package uses Keyring.

## Installation

### Pip

```shell
pip install mutt-oauth2
```

## Usage

```plain
Usage: mutt-oauth2 [OPTIONS]

  Obtain and print a valid OAuth2 access token.

Options:
  -a, --authorize      Manually authorise new tokens.
  -d, --debug          Enable debug logging.
  -t, --test           Test authentication.
  -u, --username TEXT  Keyring username.
  -h, --help           Show this message and exit.
```

Start by calling `mutt-oauth2 -a`. Be sure to have your client ID and and client secret available.

### Scopes required

| Provider  | Scopes                                                              |
| --------- | ------------------------------------------------------------------- |
| Gmail     | Gmail API                                                           |
| Microsoft | offline_access IMAP.AccessAsUser.All POP.AccessAsUser.All SMTP.Send |

To support other accounts, use the `--username` argument with a unique string such as the account…
