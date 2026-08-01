---
repo: "abrignoni/VLEAPP"
name: "VLEAPP"
description: "Vehicle Logs Events And Properties Parser"
readmeQualityOk: true
url: "https://github.com/abrignoni/VLEAPP"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [43, 39]
stars: 102
forks: 28
openIssues: 1
closedIssues: 0
watchers: 9
contributors: 12
recentReleases: 2
createdAt: "2021-07-02T02:07:04Z"
lastCommitAt: "2026-08-01T06:16:09Z"
lastReleaseAt: "2026-07-25T16:11:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 42
maintainers: ["abrignoni", "Johann-PLW", "JamesHabben"]
openGraphImageUrl: "https://opengraph.githubassets.com/d95a9854ae8372ff41ac04def61496ba35b163a10df42aabf6ea988247c54a66/abrignoni/VLEAPP"
---

# Vehicle Logs Events And Protobuf Parser

If you want to contribute hit me up on twitter: https://twitter.com/AlexisBrignoni   

## Requirements

**Python 3.10 or above**

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
$ python vleapp.py -t <zip | tar | fs | gz> -i <path_to_extraction> -o <path_for_report_output>
```

### GUI

```
$ python vleappGUI.py 
```

### Help

```
$ python vleapp.py --help
```
## Contributing artifact plugins

Each plugin is a Python source file which should be added to the `scripts/artifacts` folder which will be loaded dynamically each time VLEAPP is run.

The plugin source file must contain a dictionary named…
