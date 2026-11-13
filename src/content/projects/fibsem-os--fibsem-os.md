---
repo: "fibsem-os/fibsem-os"
name: "fibsem-os"
description: "FIBSEM Operating System"
readmeQualityOk: true
url: "https://github.com/fibsem-os/fibsem-os"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 27
forks: 13
openIssues: 10
closedIssues: 41
watchers: 1
contributors: 7
recentReleases: 7
createdAt: "2025-06-11T23:59:33Z"
lastCommitAt: "2026-11-13T05:30:21Z"
lastReleaseAt: "2026-11-09T22:54:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 70
maintainers: ["patrickcleeve2", "vikba"]
openGraphImageUrl: "https://opengraph.githubassets.com/afb5ea3bce28eaac2ae3df0a035df8e7df0826ff871396b6e31c1cf171f7091d/fibsem-os/fibsem-os"
---

# fibsemOS

A universal API for FIBSEM Control, Development and Automation

## Overview

fibsemOS is a Python package for controlling and automating FIB/SEM microscopes. It provides a universal API for FIBSEM control, development and automation, abstracting away the details of the microscope hardware to provide a simple, intuitive interface. The package includes reusable modules for common workflows and operations, and is extensible to support new microscopes.

We currently aim to support  [ThermoFisher AutoScript](https://www.thermofisher.com/at/en/home/electron-microscopy/products/software-em-3d-vis/autoscript-4-software.html), [TESCAN Automation SDK](https://tescan.com/product-portfolio/fib-sem), and Delmic Odemis (for the METEOR). A [Zeiss Python API](https://www.zeiss.com/metrology/en/software/zeiss-inspect/features/python-interface.html) driver is planned, as is support for other FIBSEM systems.

For more information see the [website](https://www.fibsemos.org).

## Installation

There are several ways to install fibsemOS depending on your application and needs. Requires Python 3.10+.

#### PyPI (For Users)

Create a virtual environment (see [Installation…
