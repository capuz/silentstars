---
repo: "opifex/symfony"
name: "symfony"
description: "RESTful JSON-based application using Symfony Framework with DDD and CQS principles and JWT authorization tokens."
readmeQualityOk: true
url: "https://github.com/opifex/symfony"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["symfony", "docker", "mailcatcher", "postgresql", "rabbitmq", "redis", "api", "cqs", "ddd", "json"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-08-29T06:36:46Z"
lastCommitAt: "2026-10-02T10:00:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 57
maintainers: ["opifex"]
openGraphImageUrl: "https://opengraph.githubassets.com/4508fd626b6c01a0163ae2a1a9a92ca224dd769d6cbf1acc112aa9da2efdde95/opifex/symfony"
---

# symfony

An example application using Symfony Framework.

## Configuration

Create custom configuration files in the project root directory.

Create `.env.local` and set it as docker environment variables file.

```dotenv
APP_ENV=dev
APP_NAME=symfony
APP_PORT=8030
APP_SECRET=166f851291ebd0ebf805b0188f1d5e7a

DEFAULT_URI=http://localhost:8030
DATABASE_URL=postgresql://admin:password@postgres:5432/symfony?serverVersion=17&charset=utf8
HTTPBIN_URL=https://httpbin.org/
JWT_PASSPHRASE=3a8d33b54f002565767e28d24743ad51b30a061ce31b9516b98efd64612009d721ca1c68fb7143193af754c352bf4edb2796fd13b89395d983c5c337d5a44be4
LOCK_DSN=redis://redis:6379?timeout=1&read_timeout=1
MAILER_DSN=smtp://mailcatcher:1025
MESSENGER_TRANSPORT_DSN=amqp://rabbitmq:5672/%2f/messages
PAYPAL_WEBHOOK_TOKEN=32045343896bbc210ab2924776f349d5d849709fd33b7697a7dbfc947795ddf0
REDIS_DSN=redis://redis:6379?timeout=1&read_timeout=1

SYMFONY_IDE=idea://open?file=%f&line=%l&/opt/project>/local/path
```

Generate real values and set them in `.env.local`.

```
$ openssl rand -hex 64   # JWT_PASSPHRASE  (256+ bits, required for HS256)
$ openssl rand -hex 32   # PAYPAL_WEBHOOK_TOKEN
```

Create `codeception.yml` with the…
