---
repo: "abrignoni/RLEAPP"
name: "RLEAPP"
description: "Returns Logs Events And Properties Parser"
url: "https://github.com/abrignoni/RLEAPP"
language: "Python"
languages: ["Python", "JavaScript", "CSS"]
languagePcts: [49, 27, 25]
stars: 132
forks: 50
openIssues: 13
closedIssues: 6
watchers: 8
contributors: 25
recentReleases: 1
createdAt: "2021-08-17T21:00:51Z"
lastCommitAt: "2026-06-28T01:45:03Z"
lastReleaseAt: "2026-05-18T22:19:23Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 42
maintainers: ["abrignoni", "stark4n6", "JamesHabben"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf5784e8227288fa456c30e79a6612f4e2cfe9234b8270826c40c684ca534c87/abrignoni/RLEAPP"
---

# Returns Logs Events And Protobuf Parser

If you want to contribute hit me up on twitter: https://twitter.com/AlexisBrignoni   

## Requirements

**Python 3.9 or above** (older versions of 3.x will also work with the exception of one or two modules)

### Dependencies

Dependencies for your python environment are listed in `requirements.txt`. Install them using the below command. Ensure the `py` part is correct for your environment, eg `py`, `python`, or `python3`, etc. 

`py -m pip install -r requirements.txt`  
or  
 `pip3 install -r requirements.txt`

To run on **Linux**, you will also need to install `tkinter` separately like so:

`sudo apt-get install python3-tk`

To install dependencies offline Troy Schnack has a neat process here:
https://twitter.com/TroySchnack/status/1266085323651444736?s=19

## Usage

### CLI

```
$ python rleapp.py -t <zip | tar | fs | gz> -i <path_to_extraction> -o <path_for_report_output>
```

### GUI

```
$ python rleappGUI.py 
```

### Help

```
$ python rleapp.py --help
```

## Contributing artifact plugins

Each plugin is a Python source file which should be added to the `scripts/artifacts` folder which will be loaded dynamically each time RLEAPP…
