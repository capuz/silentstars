---
repo: "Kenny-Jolley/LAMMPS_UTILITIES"
name: "LAMMPS_UTILITIES"
description: "A collection of utility scripts for lammps"
readmeQualityOk: true
url: "https://github.com/Kenny-Jolley/LAMMPS_UTILITIES"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-12-11T12:57:26Z"
lastCommitAt: "2026-10-12T11:14:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 77
undervaluedScore: 43
maintainers: ["Kenny-Jolley"]
openGraphImageUrl: "https://opengraph.githubassets.com/8de02b586fc6ce42cf8ff75b16f5a3a2eb4060a74996ca1b813d18e8286db8c4/Kenny-Jolley/LAMMPS_UTILITIES"
---

# LAMMPS_UTILITIES
A collection of standalone utility scripts for lammps.  
This includes lattice generators, lattice converters and example lammps input scripts.

## Requirements

This code requires [Python](http://www.python.org) to run. Currently Python 3.6+ should work, but I have only tested on version 3.10. 

## Installation

Clone the repository to a directory of your choice:
~~~
 git clone https://github.com/Kenny-Jolley/LAMMPS_UTILITIES.git
~~~

To be able to use the scripts from the command line from anywhere, you will need to add the script directories to your path. 
e.g. if you created a git directory in your home directory, add these lines for a tcsh shell:

.tcshrc:  
~~~
setenv PATH ${PATH}:$HOME/git/LAMMPS_UTILITIES/utilities
setenv PATH ${PATH}:$HOME/git/LAMMPS_UTILITIES/carbon/graphite/scripts
setenv PATH ${PATH}:$HOME/git/LAMMPS_UTILITIES/carbon
~~~
Or for bash:

.bashrc:  
~~~
export PATH=$PATH:$HOME/git/LAMMPS_UTILITIES/utilities
export PATH=$PATH:$HOME/git/LAMMPS_UTILITIES/carbon/graphite/scripts
export PATH=$PATH:$HOME/git/LAMMPS_UTILITIES/carbon
~~~
To make sure the python scripts executable, run:  
~~~
chmod +x lammps_*
~~~

## Usage

The scripts can be…
