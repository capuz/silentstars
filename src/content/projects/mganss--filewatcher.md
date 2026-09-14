---
repo: "mganss/FileWatcher"
name: "FileWatcher"
description: "File System Change Notification Service"
readmeQualityOk: true
url: "https://github.com/mganss/FileWatcher"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["change-monitoring", "event-notifications", "filesystem", "filesystem-change-monitor", "filewatch", "fswatch"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2019-03-10T18:34:58Z"
lastCommitAt: "2026-09-14T09:13:17Z"
lastReleaseAt: "2023-11-02T18:04:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 63
maintainers: ["mganss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/75e0f8bfc9f6dba36f84b36043be63ae32499ff401e8fa19d160d63fdf7fbff3/mganss/FileWatcher"
---

FileWatcher
===========

A Windows service, console application, and library that allows execution of commands in response to file system changes.

Usage
-----

FileWatcher can be used either as a console application, as a Windows service, or as a library in your own applications. If you want to use the service or console application just grab a zip from [releases](https://github.com/mganss/FileWatcher/releases).

```
Usage: FileWatcher.Service [OPTION]... CONFIGFILE...
Watch file system changes.

Options:
  -c, --console              Run as a console application
  -h, --help                 Show this message and exit
  -d, --dryrun               Do not execute commands, only perform a test run
  -r, --reload               Reload when configuration file changes (default is
                               true)
```

A configuration file looks like this:

```json
{
  "DryRun": true,
  "AutoReload": true,
  "Tasks": [
    {
      "Name": "MyTask",
      "Path": "c:/path/to/watch",
      "Filter": "*",
      "IncludeSubdirectories": false,
      "NotifyFilter": "Attributes, CreationTime, LastAccess, LastWrite",
      "ChangeTypes": "Changed, Created, Deleted, Renamed",
      "Command":…
