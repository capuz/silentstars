---
repo: "kazeburo/Monoceros"
name: "Monoceros"
description: "PSGI/Plack server with event driven connection manager, preforking workers"
readmeQualityOk: true
url: "https://github.com/kazeburo/Monoceros"
language: "Perl"
languages: ["Perl"]
languagePcts: [100]
stars: 55
forks: 6
openIssues: 5
closedIssues: 2
watchers: 12
contributors: 3
recentReleases: 0
createdAt: "2013-04-22T08:20:08Z"
lastCommitAt: "2026-11-09T04:34:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 21
maintainers: ["kazeburo"]
openGraphImageUrl: "https://opengraph.githubassets.com/16d91a9092c7053422e4f4f990a3f236425b4425e2af917c2c4f1303a5216a49/kazeburo/Monoceros"
---

# NAME

Monoceros - PSGI/Plack server with event driven connection manager, preforking workers

# SYNOPSIS

    % plackup -s Monoceros --max-keepalive-reqs=10000 --max-workers=2 -a app.psgi

# DESCRIPTION

Monoceros is PSGI/Plack server supports HTTP/1.1. Monoceros has a event-driven 
connection manager and preforking workers. Monoceros can keep large amount of 
connection at minimal processes.

                                                          +--------+
                                                      +---+ worker |
          TCP       +---------+   UNIX DOMAIN SOCKET  |   +--------+
    --------------- | manager | ----------------------+ 
                    +---------+                       |   +--------+
    <- keepalive ->              <-- passing fds -->  `---+ worker |
                                                          +--------+

Features of Monoceros

\- a manager process based on [AnyEvent](https://metacpan.org/pod/AnyEvent) keeps over C10K connections

\- uses [IO::FDPass](https://metacpan.org/pod/IO%3A%3AFDPass) for passing a file descriptor to workers

\- supports HTTP/1.1 and also supports HTTP/1.0 keepalive

And this server inherit…
