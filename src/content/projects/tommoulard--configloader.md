---
repo: "tomMoulard/configLoader"
name: "configLoader"
description: "shell script to load my settings directly"
readmeQualityOk: true
url: "https://github.com/tomMoulard/configLoader"
language: "Shell"
languages: ["Shell"]
languagePcts: [52]
topics: ["shell-script", "shell", "bash", "zsh", "bashrc", "bashrc-configs"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-09-27T05:59:33Z"
lastCommitAt: "2026-08-31T09:57:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 60
undervaluedScore: 31
maintainers: ["tomMoulard"]
openGraphImageUrl: "https://opengraph.githubassets.com/413df41e9fa6f2578022788c2b6384eaa4bb6a65789b04ecf5890a3fbb1bd505/tomMoulard/configLoader"
fundingLinks: ["GITHUB:https://github.com/tomMoulard", "CUSTOM:https://www.paypal.me/tommoulard"]
---

# ConfigLoader

Shell script to load my settings/dotfiles

## Usage

via https:
```bash
$ git clone --recurse-submodules https://github.com/tomMoulard/configLoader.git $HOME/workspace/configLoader/
$ cd $HOME/workspace/configLoader && make
```

Or via ssh
```bash
$ git clone --recurse-submodules git@github.com:tomMoulard/configLoader.git $HOME/workspace/configLoader/
$ cd $HOME/workspace/configLoader && make
```

Feel free the change configurations with your own taste.

Some environment variables are defined in the `.env` file.
You can use `cp .env.default .env` to populate your file, or `./install -c`.

## Options
When using the `install.sh` script, you can use options to help you during installation:
```
Usage ./install.sh
Option:
	-c,--config	Promt user to enter configuration variables
	-d,--debug	Activate debug mode
	-g,--gui	Use GUI to help with the configuration (implies --config)
	-h,--help	Show this help
	-v,--verbose	Activate verbose mode
```

Note that for the `--gui`, you need to have installed `whiptail`.

## Demo
If you want to try those configuration, there is a `demo` recipe in the `Makefile`.
When you do `make demo`, you will be creating a docker image with the…
