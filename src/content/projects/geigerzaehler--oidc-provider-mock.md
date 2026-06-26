---
repo: "geigerzaehler/oidc-provider-mock"
name: "oidc-provider-mock"
description: "A mock OpenID Provider server to test and develop OpenID Connect authentication"
url: "https://github.com/geigerzaehler/oidc-provider-mock"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["mock-server", "oidc", "openid", "openid-connect", "openid-provider", "test"]
stars: 39
forks: 14
openIssues: 4
closedIssues: 14
watchers: 2
contributors: 8
recentReleases: 1
createdAt: "2025-01-08T15:22:17Z"
lastCommitAt: "2026-06-26T23:40:21Z"
lastReleaseAt: "2026-04-12T16:56:03Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 59
maintainers: ["renovate[bot]", "geigerzaehler", "apollo13"]
openGraphImageUrl: "https://opengraph.githubassets.com/c11632d2febe1ec150d4b1bd83cdebdb0e31cf1942c9301bc7ed69f94472e779/geigerzaehler/oidc-provider-mock"
---

# OpenID Provider Mock

> A mock OpenID Provider server to test and develop OpenID Connect
> authentication.

You can find the full documentation [here][docs].

[docs]: https://oidc-provider-mock.readthedocs.io/latest/

## Usage

The simplest method to run the server is
[`pipx`](https://pipx.pypa.io/latest/installation/):

```bash
$ pipx run oidc-provider-mock
Started OpenID provider http://localhost:9400
```

Alternatively, you can run the server as a container:

```bash
docker run -p 9400:9400 ghcr.io/geigerzaehler/oidc-provider-mock
```

See the [“Usage” documentation](https://oidc-provider-mock.readthedocs.io/stable/usage.html#running-the-server) for details.

Now, configure your OpenID Connect client library in your app to use
`http://localhost:9400` as the issuer URL. By default, you can use any client ID
and client secret with the provider.

Finally, you can authenticate against the app (the Relying Party) through the
mock provider’s login form:

![Authorization form](https://oidc-provider-mock.readthedocs.io/latest/_static/auth-form.webp)

Take a look at the following example that uses the server in a test for a
[Flask-OIDC](https://flask-oidc.readthedocs.io/en/latest/)…
