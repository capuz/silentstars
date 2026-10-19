---
repo: "colour-science/flask-compress"
name: "flask-compress"
description: "Compress responses of your Flask application."
readmeQualityOk: true
url: "https://github.com/colour-science/flask-compress"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 130
forks: 28
openIssues: 1
closedIssues: 31
watchers: 5
contributors: 27
recentReleases: 0
createdAt: "2018-07-29T10:30:21Z"
lastCommitAt: "2026-10-19T09:14:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 32
maintainers: ["alexprengere", "mmdbalkhi"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ee130fef6b02c49d48ebd572c23313a40ecdab30e33be950fdb9d9cbbf9fc15/colour-science/flask-compress"
---

# Flask-Compress

Flask-Compress allows you to easily compress your [Flask](http://flask.pocoo.org/) application's responses with gzip, deflate, brotli or zstd. It originally started as a fork of [Flask-gzip](https://github.com/closeio/Flask-gzip). Supported Python versions are 3.9 and newer.

The preferred solution is to have a server (like [Nginx](http://wiki.nginx.org/Main)) automatically compress the static files for you. If you don't have that option Flask-Compress will solve the problem for you.

## How it works

Flask-Compress both adds the various headers required for a compressed response and compresses the response data.
This makes serving compressed static files extremely easy.

Internally, every time a request is made the extension will check if it matches one of the compressible MIME types
and whether the client and the server use some common compression algorithm, and will automatically attach the
appropriate headers.

To determine the compression algorithm, the `Accept-Encoding` request header is inspected, respecting the
quality factor as described in [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding).
If no requested compression…
