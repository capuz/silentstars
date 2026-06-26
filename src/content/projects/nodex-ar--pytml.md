---
repo: "NodeX-AR/Pytml"
name: "Pytml"
description: "Pytml is a easy and lazy way to connect py files to html."
url: "https://github.com/NodeX-AR/Pytml"
homepage: "http://pytml.js.org/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [67, 32]
topics: ["html5", "pyodide", "python", "awesome", "awesome-list", "cdn", "cdn-package", "pytml", "developer-tools", "education"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-05-28T14:53:59Z"
lastCommitAt: "2026-06-26T21:30:55Z"
lastReleaseAt: "2026-06-19T12:29:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 69
maintainers: ["NodeX-AR"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1252471930/0a2a10f1-165f-431c-8fa2-1a3312bbae30"
discussionCount: 1
---

# PYTML - Python in Your Browser

**Run Python in your browser with zero configuration – no server, just a script tag.**

Pytml is a lightweight (~15KB) JavaScript library that acts as a bridge between Python and HTML via WebAssembly. Drop a single script tag into any static page, write your logic inside `<py>` tags, and it runs natively in the browser.

---

##  Quick Start

Add one line to your HTML:

```html
<script src="https://pytml.vercel.app/pytml.js"></script>
```
## Usage
Option 1: Inline Python (Recommended for mobile/local)
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://pytml.vercel.app/pytml.js"></script>
</head>
<body>
    <py>
print("Hello, world!")
name = input("Your name? ")
print(f"Hi {name}!")
    </py>
</body>
</html>
```
Option 2: External Python File (HTTP/HTTPS only)
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://pytml.vercel.app/pytml.js"></script>
</head>
<body>
    <script type="text/python" src="script.py"></script>
</body>
</html>
py
name = input("Enter your name: ")
age = input("Enter your age: ")
print(f"Hello {name}, you are {age} years old!")
```
## Important for Local Users (file:// protocol)
If you're running HTML…
