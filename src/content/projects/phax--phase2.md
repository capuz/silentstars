---
repo: "phax/phase2"
name: "phase2"
description: "A generic Java AS2 library, servlet and server"
readmeQualityOk: true
url: "https://github.com/phax/phase2"
language: "Java"
languages: ["Java"]
languagePcts: [93]
topics: ["as2", "openas2", "java", "eprocurement", "edelivery", "einvoicing"]
stars: 124
forks: 50
openIssues: 5
closedIssues: 135
watchers: 11
contributors: 9
recentReleases: 0
createdAt: "2013-05-24T08:45:41Z"
lastCommitAt: "2026-10-09T18:56:51Z"
lastReleaseAt: "2018-07-27T06:24:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 41
maintainers: ["phax"]
openGraphImageUrl: "https://opengraph.githubassets.com/d88e0c498f95d89be5f776d2faee683ad519c848d410c3fe02bc76f8784a8e83/phax/phase2"
discussionCount: 4
---

# phase2 (formerly known as "as2-lib")

> If this project saved you some time or made your day a little easier, a star would mean a lot — it helps others find it too.

AS2 is a transport protocol specified in [RFC 4130](http://www.ietf.org/rfc/rfc4130.txt).
AS2 version 1.1 adding compression is specified in [RFC 5402](http://www.ietf.org/rfc/rfc5402.txt).
The MDN is specified in [RFC 3798](http://www.ietf.org/rfc/rfc3798.txt).
Algorithm names are defined in [RFC 5751](https://www.ietf.org/rfc/rfc5751.txt) (S/MIME 3.2) which supersedes [RFC 3851](https://www.ietf.org/rfc/rfc3851.txt) (S/MIME 3.1);

See the **[Wiki](https://github.com/phax/phase2/wiki)** for all details.
It also contains [License details](https://github.com/phax/phase2/wiki/Licensing). 

This library is a fork of [OpenAS2](http://sourceforge.net/projects/openas2/) which did not release updates since 2010 (as per August 2015 they are on GitHub at https://github.com/OpenAS2/OpenAs2App).
I then split the project into a common library part (the "as2-lib" submodule) and a server part (the "as2-server" submodule) which contains a stand alone (socket) server.
The library project also contains a simple AS2 client which can…
