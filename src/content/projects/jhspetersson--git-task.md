---
repo: "jhspetersson/git-task"
name: "git-task"
description: "Local-first task manager/bug tracker that stores everything right in the git repository and can sync issues from/to GitHub, GitLab, Jira Cloud and Redmine."
readmeQualityOk: true
url: "https://github.com/jhspetersson/git-task"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bug", "bug-tracker", "cli", "git", "manager", "rust", "task", "task-manager", "tracker", "github"]
stars: 51
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-02T21:06:50Z"
lastCommitAt: "2026-10-16T08:27:27Z"
lastReleaseAt: "2026-03-07T08:31:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 32
maintainers: ["jhspetersson"]
openGraphImageUrl: "https://opengraph.githubassets.com/918237486380658fda6a3589c500fe5ac8c7a6c7b739d58ad98524df9d681f19/jhspetersson/git-task"
---

# git-task

Local-first task manager/bug tracker within your git repository which can import issues from GitHub, GitLab, Jira Cloud and Redmine.

[Installation](#installation)  
[Concepts](#concepts)  
[Commands](#commands)  
[GitHub support](#github-support)  
[GitLab support](#gitlab-support)  
[JIRA support](#jira-support)  
[Redmine support](#redmine-support)

## Installation

Build a binary, then add it as a git command:

    cargo install git-task
    git config --global alias.task '!~/.cargo/bin/git-task'

Now you can switch to some git repo and run it as:

    git task create "My first task"

Or import issues from GitHub (`GITHUB_TOKEN` or `GITHUB_API_TOKEN` env variable might be needed to be set up if you have a private repository)
or GitLab (`GITLAB_TOKEN` or `GITLAB_API_TOKEN` is needed then):

    git task pull

## Concepts

`git-task` maintains a collection of tasks, which are essentially an integer ID and a set of properties.

Some properties are special: `name`, `description`, `author`, `created` and `status`. You can add custom properties for every task.
It's possible to define conditional color highlighting depending on the value of the property. 

Tasks can have…
