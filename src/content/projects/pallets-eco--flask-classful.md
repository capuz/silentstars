---
repo: "pallets-eco/flask-classful"
name: "flask-classful"
description: "Class based views for Flask"
readmeQualityOk: true
url: "https://github.com/pallets-eco/flask-classful"
homepage: "https://flask-classful.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "flask"]
stars: 235
forks: 53
openIssues: 6
closedIssues: 82
watchers: 15
contributors: 53
recentReleases: 0
createdAt: "2015-08-07T08:30:10Z"
lastCommitAt: "2026-10-21T08:48:27Z"
lastReleaseAt: "2023-09-07T21:45:20Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 26
maintainers: ["dependabot[bot]", "Flix6x", "kevin-brown"]
openGraphImageUrl: "https://opengraph.githubassets.com/55b3ca8578e66326ed15f2fe36875f4f1068e295d47db66acccc236ef5c93692/pallets-eco/flask-classful"
fundingLinks: ["GITHUB:https://github.com/pallets", "CUSTOM:https://palletsprojects.com/donate", "TIDELIFT:https://tidelift.com/funding/github/pypi/Flask"]
---

Flask-Classful
==============

Flask-Classful is an extension that adds class-based views to [Flask][].
Class-based views are a way to encapsulate specific context and behavior for
routes and methods, complementing Flask's blueprints. They provide a more
powerful system than Flask's own `MethodView`.

Read the documentation at <https://flask-classful.readthedocs.io>.

[Flask]: https://flask.palletsprojects.com

Pallets Community Ecosystem
---------------------------

> [!IMPORTANT]\
> This project is part of the Pallets Community Ecosystem. Pallets is the
> organization that maintains Flask; Pallets-Eco enables community maintenance
> of Flask extensions. If you are interested in helping maintain this project,
> please reach out on [the Pallets Discord server](https://discord.gg/pallets).

A Basic Example
---------------

This example defines a few routes by defining methods on a subclass of
`flask_classful.FlaskView`.

```python
# example.py
import random
from flask import Flask, abort
from flask_classful import FlaskView

quotes = [
    "A noble spirit embiggens the smallest man! ~ Jebediah Springfield",
    "If there is a way to do it better... find it. ~ Thomas Edison",…
