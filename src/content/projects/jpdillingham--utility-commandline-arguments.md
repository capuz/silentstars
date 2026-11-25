---
repo: "jpdillingham/Utility.CommandLine.Arguments"
name: "Utility.CommandLine.Arguments"
description: "A C# .NET class library containing tools for parsing the command line arguments of console applications."
readmeQualityOk: true
url: "https://github.com/jpdillingham/Utility.CommandLine.Arguments"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["csharp", "command-line", "command-line-parser", "commandline", "dotnet", "arguments-parser", "flags"]
stars: 118
forks: 25
openIssues: 4
closedIssues: 28
watchers: 11
contributors: 7
recentReleases: 0
createdAt: "2017-03-24T03:41:44Z"
lastCommitAt: "2026-11-25T03:13:28Z"
lastReleaseAt: "2018-12-02T03:21:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 27
maintainers: ["jpdillingham"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9424d5f4b385bf933c13509020cda907137ab498d171703b5b5e7d1bb24aff4/jpdillingham/Utility.CommandLine.Arguments"
---

# Utility.CommandLine.Arguments

A C# .NET Class Library containing tools for parsing the command line arguments of console applications.

## Why?

I needed a solution for parsing command line arguments and didn't like the existing options.

## Installation

Install from the NuGet gallery GUI or with the Package Manager Console using the following command:

```Install-Package Utility.CommandLine.Arguments```

The code is also designed to be incorporated into your project as a single source file (Arguments.cs).

## Quick Start

Create private static properties in the class containing your ```Main()``` and mark them with the ```Argument``` attribute, assigning short and long names.  Invoke
the ```Arguments.Populate()``` method within ```Main()```, then implement the rest of your logic.  

The library will populate your properties with the values
specified in the command line arguments.

```c#
internal class Program
{
    // [Argument(short name (char), long name (string), help text)]
    [Argument('b', "myBool", "a boolean value")]
    private static bool Bool { get; set; }

    [Argument('f', "someFloat")]
    private static double Double { get; set; }
