---
repo: "solanum-ircd/solanum"
name: "solanum"
description: "An IRCd for unified networks"
readmeQualityOk: true
url: "https://github.com/solanum-ircd/solanum"
homepage: "https://solanum.chat/"
language: "C"
languages: ["C"]
languagePcts: [92]
topics: ["solanum", "charybdis", "ratbox", "irc", "ircd", "ircv3", "hacktoberfest"]
stars: 257
forks: 63
openIssues: 74
closedIssues: 69
watchers: 22
contributors: 75
recentReleases: 0
createdAt: "2020-10-13T18:19:43Z"
lastCommitAt: "2026-07-04T22:51:10Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 83
undervaluedScore: 38
maintainers: ["skizzerz", "progval", "aaronmdjones"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b1dc58442e1a275fc6717b848fa791ebacbd5fd4ce46e59879893616f61bc1a/solanum-ircd/solanum"
---

# solanum 

Solanum is an IRCv3 server designed to be highly scalable.  It implements IRCv3.1 and some parts of IRCv3.2.

It is meant to be used with an IRCv3-capable services implementation such as [Atheme][atheme] or [Anope][anope].

   [atheme]: https://atheme.github.io/
   [anope]: http://www.anope.org/

# necessary requirements

 * A supported platform
 * A working dynamic library system
 * A working lex and yacc - flex and bison should work

# platforms

Solanum is developed on Linux with glibc, but is currently portable to most POSIX-compatible operating systems.
However, this portability is likely to be removed unless someone is willing to maintain it.  If you'd like to be that
person, please let us know on IRC.

# platform specific errata

These are known issues and workarounds for various platforms.

 * **FreeBSD**: if you are compiling with ipv6 you may experience
   problems with ipv4 due to the way the socket code is written.  To
   fix this you must: `sysctl net.inet6.ip6.v6only=0`

 * **Solaris**: you may have to set your `PATH` to include `/usr/gnu/bin` and `/usr/gnu/sbin` before `/usr/bin`
   and `/usr/sbin`. When running as a 32-bit binary, it should be started…
