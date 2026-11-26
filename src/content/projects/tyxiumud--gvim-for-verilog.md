---
repo: "tyxiumud/gvim_for_verilog"
name: "gvim_for_verilog"
description: "this repository is vim cfg for verilog."
originalDescription: "this repository is vim cfg for verilog."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/tyxiumud/gvim_for_verilog"
language: "Vim Script"
languages: ["Vim Script"]
languagePcts: [87]
topics: ["verilog", "vimrc"]
stars: 56
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-21T08:01:00Z"
lastCommitAt: "2026-11-26T15:25:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 41
maintainers: ["tyxiumud", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78b1987efddd45e0961b94163799c72f94928c63b9bb671cbaf3d430f04ee6ec/tyxiumud/gvim_for_verilog"
---

# GVim for Verilog

A set of Vim/GVim configurations for daily Verilog development. The project places common configurations and plugins directly in the repository. After installation, you get features such as a file tree, status bar, bracket auto-completion, port generation, module instantiation, and `xvlog` syntax checking.

This project prioritizes simplicity, offline availability, and ease of modification. You can use the full configuration directly, or pick only the mappings, functions, or plugins you need.

## Main Features

- Verilog syntax highlighting and common editing options
- NERDTree file tree and Airline status bar
- Automatic bracket completion and rainbow brackets
- Quick generation of `input` and `output` port declarations
- Add or update file headers, module names, and modification times
- Generate module instantiation templates and testbench skeletons
- Use ALE to call Vivado `xvlog` for syntax checking
- Quick buffer switching, closing, and cross-file search
- Optional Chinese Vim help documentation

## Before You Begin

Vim/GVim 8.2 or later is recommended. Before starting installation, please note the following dependencies and configuration behaviors:
