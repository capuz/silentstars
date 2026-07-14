---
repo: "bing-jian/gmmreg-python"
name: "gmmreg-python"
description: "Python implementation of \"Robust Point Set Registration Using Gaussian Mixture Models\" by Jian & Vemuri, PAMI'11"
readmeQualityOk: true
url: "https://github.com/bing-jian/gmmreg-python"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 64
forks: 10
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-11-19T07:03:33Z"
lastCommitAt: "2026-07-14T05:53:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 31
maintainers: ["bing-jian"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cb9baf1774288a202f8d88c8eb59c7b2038853f9fa4369ff773452a856f0e59/bing-jian/gmmreg-python"
---

# gmmreg-python

Python implementation of "Robust Point Set Registration Using Gaussian Mixture Models" by Jian &amp; Vemuri, PAMI'11.

Please note that we have another [github repo](https://github.com/bing-jian/gmmreg) that contains C++ implementation and 
more info about this work.

### Build and Test
Run the following steps to download, install and test the gmmreg python package:
  ```Shell
  git clone https://github.com/bing-jian/gmmreg-python.git
  cd gmmreg-python
  pip install -r requirements.txt
  cd src
  python setup.py install --user
  cd ../data
  gmmreg-demo ./fish_partial.ini
  ```
Installing the package also installs the `gmmreg-demo` command (backed by `gmmreg.demo:main`),
so no `cd`/relative-path gymnastics are needed to run it from anywhere once installed.

If the gmmreg package was successfully installed, the last command should give a point set matching result like the image below:
</p>

### Config files
Configs can be written as either a classic `.ini` file or a `.yaml`/`.yml` file with the
same `FILES`/`GMMREG_OPT` sections; the format is picked automatically from the file
extension. `data/fish_partial.yaml` is the YAML equivalent of `data/fish_partial.ini`:…
