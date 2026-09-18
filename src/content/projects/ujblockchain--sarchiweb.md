---
repo: "ujblockchain/sarchiweb"
name: "sarchiweb"
description: "Official Website for South Africa-Switzerland Bilateral Research Chair in Blockchain Technology (UJ Blockchain) which aims to explore blockchain integrations with real-world applications and development."
readmeQualityOk: true
url: "https://github.com/ujblockchain/sarchiweb"
homepage: "https://www.blockchain.uj.ac.za"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [56, 21]
topics: ["agri-food", "blockchain", "blockchain-technology", "dapps-development", "web3", "web3-dapp", "django", "jinja2", "hedera", "hedera-hashgraph"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-08-08T15:06:40Z"
lastCommitAt: "2026-09-18T14:02:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 62
maintainers: ["edmundrotimi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e71e1888344509a29f681e6aa2c891a132a66bf3e3c0eccf029db116ebfb1bf1/ujblockchain/sarchiweb"
---

<figure align="center">
  <figcaption>South Africa-Switzerland Bilateral Research Chair in Blockchain Technology</figcaption>
</figure>

# SARChI

South Africa-Switzerland Bilateral Research Chair in Blockchain Technology (University of Johannesburg – UJ Blockchain) focused on blockchain integration with **real-world applications**.

## Setup – Environment Variables

Create a `.env` file (or set these in your environment):

```bash
SECRET_KEY = '...'
ALLOWED_HOSTS = '...'
DEBUG = ...
DJANGO_ENV = ...
ADMIN_PATH = ...
AUTO_LOGOUT_IDLE_TIME = ...

# database
ENGINE = '...'
NAME = ...
HOST = ...
USER = ...
PASSWORD = ...
PORT = ...

# email
EMAIL_BACKEND = '...'
EMAIL_PORT = ...
MAILTRAP_API_TOKEN = ...
EMAIL_HOST = '...'
EMAIL_HOST_USER = '...'
EMAIL_HOST_PASSWORD = '...'
DEFAULT_FROM_EMAIL = '...'
SERVER_EMAIL = '...'
EMAIL_SUBJECT_PREFIX = '...'
EMAIL_USE_TSL = ...

#captcha seetings
RECAPTCHA_PUBLIC_KEY = '...'
RECAPTCHA_PRIVATE_KEY = '...'
RECAPTCHA_REQUIRED_SCORE = ...

#sentry
SENTRY_DNS = '...'
SENTRY_REPORT_URL = '...'

# csp
SECURE_SSL_HOST = ...
CSRF_TRUSTED_ORIGINS = '....'

# axes settings
SILENCED_SYSTEM_CHECKS = '...'
AXES_IPWARE_PROXY_COUNT = 1…
