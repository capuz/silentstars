---
repo: "theubusu/unixtract"
name: "unixtract"
description: "Extractor for various firmware formats."
readmeQualityOk: true
url: "https://github.com/theubusu/unixtract"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["extractor", "firmware", "firmware-tools", "iot", "binary", "embedded", "reverse-engineering"]
stars: 24
forks: 8
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-11T18:19:11Z"
lastCommitAt: "2026-07-28T14:59:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 50
maintainers: ["theubusu", "WeebDataHoarder"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a9483677e1fa641ecf22ab4c8d59485de7a993ee6d6b9f9c2f31b51bc517688/theubusu/unixtract"
---

# unixtract
Extractor for various file formats.   
This is a tool that is able to extract the contents of various firmware package formats, mostly from TVs and AV devices.   
Built in Rust, and made to not depend on any external dependancies, only Rust crates. This way it can work on Windows, Linux and MacOS and even Android.   
Please note that this project is still under active development and errors may occur. Feel free to make an issue in that case, or if you have any feature request.   
   
**PLEASE NOTE** - this program is NOT, and will never be designed for re-packing the extracted files!

# Installation
You can download the latest auto build for Windows and Linux x86-64 from [here](https://nightly.link/theubusu/unixtract/workflows/rust/main).   
Or, build from source, by downloading the code or cloning the respository and running `cargo build --release`. The binary will be saved in `target/release`.  

# Usage
`unixtract [OPTIONS] <INPUT_TARGET> [OUTPUT_FOLDER]`  
Arguments:   
`<INPUT_TARGET>` - The target to analyze/extract.  
`[OUTPUT_FOLDER]` - Folder to save extracted files to. If not provided, extracted files will be saved in folder `_<INPUT_TARGET>`.   
Options:…
