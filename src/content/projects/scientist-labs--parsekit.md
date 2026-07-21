---
repo: "scientist-labs/parsekit"
name: "parsekit"
description: "Ruby document parsing toolkit with zero runtime dependencies. Parse PDFs, DOCX, XLSX, and images (with OCR) using a single, lightweight gem. Statically links MuPDF and Tesseract at   compile time for hassle-free installation - no system libraries or external tools required."
readmeQualityOk: true
url: "https://github.com/scientist-labs/parsekit"
language: "Ruby"
languages: ["Ruby", "Rust"]
languagePcts: [80, 20]
topics: ["content", "extraction", "metadata", "ruby"]
stars: 49
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-08-21T13:00:37Z"
lastCommitAt: "2026-07-21T06:10:47Z"
lastReleaseAt: "2026-06-20T02:53:06Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 45
maintainers: ["cpetersen", "dependabot[bot]", "xrl"]
openGraphImageUrl: "https://opengraph.githubassets.com/b322c5399494f79719d3057f87bba8918591984e3ca06b33a027a935ef6c5ba7/scientist-labs/parsekit"
---

Native Ruby bindings for the [parser-core](https://crates.io/crates/parser-core) Rust crate, providing high-performance document parsing and text extraction capabilities through Magnus. This gem wraps parser-core to extract text from PDFs, Office documents (DOCX, XLSX), images (with OCR), and more. Part of the ruby-nlp ecosystem.

## Features

- 📄 **Document Parsing**: Extract text from PDFs, Office documents (DOCX, XLSX)
- 🖼️ **OCR Support**: Extract text from images using Tesseract OCR
- 🚀 **High Performance**: Native Rust performance with Ruby convenience
- 🔧 **Unified API**: Single interface for multiple document formats
- 📦 **Cross-Platform**: Works on Linux, macOS, and Windows
- 🧪 **Well Tested**: Comprehensive test suite with RSpec

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'parsekit'
```

And then execute:

    $ bundle install

Or install it yourself as:

```bash
gem install parsekit
```

### Requirements

- Ruby >= 3.0.0
- Rust toolchain (stable)
- C compiler (for linking)

That's it! ParseKit bundles all necessary libraries including Tesseract for OCR, so you don't need to install any system dependencies.

## Usage

### Basic Usage…
