---
repo: "yoshoku/llama_cpp.rb"
name: "llama_cpp.rb"
description: "llama_cpp.rb provides Ruby bindings for llama.cpp"
readmeQualityOk: true
url: "https://github.com/yoshoku/llama_cpp.rb"
homepage: "https://rubygems.org/gems/llama_cpp"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["gem", "llm", "ruby", "ai", "llama"]
stars: 235
forks: 18
openIssues: 7
closedIssues: 8
watchers: 11
contributors: 4
recentReleases: 0
createdAt: "2023-03-31T12:49:20Z"
lastCommitAt: "2026-07-11T05:57:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 35
maintainers: ["yoshoku", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc75e38dfb8cd08e6c98616ee20ab9f89a06381c9334a42f07e628cf087d09a3/yoshoku/llama_cpp.rb"
---

# llama_cpp.rb

llama_cpp.rb provides Ruby bindings for the [llama.cpp](https://github.com/ggerganov/llama.cpp).

Note: [rllama](https://github.com/docusealco/rllama) is another Ruby binding for llama.cpp using FFI.
It provides a high-level API for easier integration.

## Installation

Install the llama.cpp. If you use homebrew, install it by executing:

```sh
$ brew install llama.cpp
```

Install the gem and add to the application's Gemfile by executing:

```sh
$ bundle config --local build.llama_cpp "--with-opt-dir=/opt/homebrew/"
$ bundle add llama_cpp
```

If bundler is not being used to manage dependencies, install the gem by executing:

```sh
$ gem install llama_cpp -- --with-opt-dir=/opt/homebrew
```

## Usage

Prepare the quantized model by refering to [the usage section on the llama.cpp README](https://github.com/ggerganov/llama.cpp#usage).
For example, you could prepare the quatization model based on
[open_llama_7b](https://huggingface.co/openlm-research/open_llama_7b)
or more useful in the context of Ruby might be a smaller model such as
[tiny_llama_1b](https://huggingface.co/TinyLlama/TinyLlama-1.1B-Chat-v1.0):

```sh
$ cd ~/
$ brew install git-lfs
$ git lfs install
$…
