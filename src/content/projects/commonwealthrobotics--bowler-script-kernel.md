---
repo: "CommonWealthRobotics/bowler-script-kernel"
name: "bowler-script-kernel"
description: "The CLI and API layer for the Bowler ScriptingEngine and all its dependant libraries."
url: "https://github.com/CommonWealthRobotics/bowler-script-kernel"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2016-08-22T20:50:50Z"
lastCommitAt: "2026-07-04T19:20:49Z"
lastReleaseAt: "2022-03-29T01:36:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 79
maintainers: ["madhephaestus"]
openGraphImageUrl: "https://opengraph.githubassets.com/22b090f4e88340797f54bf749980dc6f6b952e7dd9095007d62d075985a5059a/CommonWealthRobotics/bowler-script-kernel"
fundingLinks: ["GITHUB:https://github.com/madhephaestus", "PATREON:https://patreon.com/madhephaestus", "ISSUEHUNT:https://issuehunt.io/r/CommonWealthRobotics/BowlerStudio", "LIBERAPAY:https://liberapay.com/madhephaestus"]
---

# Documentation

[Javadoc Generated Documentation](https://commonwealthrobotics.com/bowler-script-kernel/namespaces.html) 

# Bowler Kernel Scripting environment

This is the core kernel mechanism for the Bowler operating system. It consists of a modular scripting environment. This engine passes Lists of JVM objects back and forth across languages, letting you mix Java, Groovy, Clojure and Python within a single memory sharing application. The sources are stored in git repos and hyperlink at the source level to add modules. You can call this application from the command line like bash and pass it scripts to run sequentially or pipe the output from one into the input of another.

## All platforms 
 You need to use the installer from 
 * [BowlerStudio Installer](https://github.com/CommonWealthRobotics/BowlerStudio/releases)
 
## Usage
This will let you pass code snippets directly to the scripting engine
```
Object returnVal = ScriptingEngine.inlineScriptRun(String code, ArrayList<Object> args,ShellType activeType)
```

This will let you load code directly out of a github gist:
This code will load this github gist:
https://gist.github.com/madhephaestus/d4312a0787456ec27a2a

<script…
