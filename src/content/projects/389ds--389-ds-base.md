---
repo: "389ds/389-ds-base"
name: "389-ds-base"
description: "The enterprise-class Open Source LDAP server for Linux"
readmeQualityOk: true
url: "https://github.com/389ds/389-ds-base"
homepage: "https://www.port389.org/"
language: "C"
languages: ["C", "Python"]
languagePcts: [53, 27]
stars: 289
forks: 119
openIssues: 373
closedIssues: 5503
watchers: 16
contributors: 94
recentReleases: 0
createdAt: "2020-09-12T12:54:14Z"
lastCommitAt: "2026-07-17T05:59:41Z"
lastReleaseAt: "2023-01-23T17:51:08Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 43
maintainers: ["mreynolds389", "droideck", "mirielka"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c05e48516e67d8b12da8b32a8fd633d55b7549ff7c1ee6cf589f93cd24bf45d/389ds/389-ds-base"
discussionCount: 10
---

389 Directory Server
====================

389 Directory Server is a highly usable, fully featured, reliable
and secure LDAP server implementation. It handles many of the
largest LDAP deployments in the world.

All our code has been extensively tested with sanitisation tools.
As well as a rich feature set of fail-over and backup technologies
gives administrators confidence their accounts are safe.

License
-------

The 389 Directory Server is subject to the terms detailed in the
license agreement file called LICENSE.

Late-breaking news and information on the 389 Directory Server is
available on our [wiki page](https://www.port389.org/)

Building
--------

    autoreconf -fiv
    ./configure --enable-debug --with-openldap --enable-cmocka --enable-asan
    make
    make lib389
    sudo make install
    sudo make lib389-install

Note: **--enable-asan** is optional, and it should only be used for debugging/development purposes.

See also full [building guide](https://www.port389.org/docs/389ds/development/building.html).

Testing
-------

    make check
    sudo py.test -s 389-ds-base/dirsrvtests/tests/suites/basic/

To debug the make check item's, you'll need libtool to help:…
