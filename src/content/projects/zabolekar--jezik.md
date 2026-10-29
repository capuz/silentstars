---
repo: "Zabolekar/jezik"
name: "jezik"
description: "Serbian dictionary with detailed information about accent"
readmeQualityOk: true
url: "https://github.com/Zabolekar/jezik"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 8
forks: 0
openIssues: 18
closedIssues: 26
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2017-08-15T07:46:11Z"
lastCommitAt: "2026-10-29T12:24:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 54
maintainers: ["sveto"]
openGraphImageUrl: "https://opengraph.githubassets.com/8eb31dd5e739f45dbc7dff445153ed574cb8d1c68be49e93b95e7590ec4aec6e/Zabolekar/jezik"
---

# jèzik

This will be a Serbian dictionary with detailed information about accent.

## Screenshots

## Web instance

You can find a running instance of this thing at <https://jezik.pythonanywhere.com/>.

## Requirements

* Python 3.9 or later
* Flask
* PyYAML

We also use `pytest` to run the tests, `mypy` with `types-PyYAML` for static type checking, and `coverage.py` to measure test coverage, but they are not necessary to run the code.

## Running it locally

To run the app locally for development purposes, do the following:

* Clone the repo to a directory named `jezik`
* Create and activate a virtual environment in a way you prefer
* Install the dependencies
  
  ```bash
  pip install -r requirements.txt
  ```

* Run the following script (it sets the needed environment variables and starts Flask):
  
  ```bash
  ./run.sh
  ```

  (on Windows cmd, use `run.bat` instead)
* Open <http://127.0.0.1:5000/>

## Using it without the web interface

You can use the underlying `lookup` function directly. It returns `Multitable` objects that can be queried in a flexible manner:

```python
>>> lookup("ауторски")["nom sg"]
 [nom sg]
m sg nom            а̀уторскӣ
f sg nom…
