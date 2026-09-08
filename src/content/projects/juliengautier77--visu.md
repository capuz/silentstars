---
repo: "julienGautier77/visu"
name: "visu"
description: "data visualization"
readmeQualityOk: true
url: "https://github.com/julienGautier77/visu"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["scientificengineering-visualization", "data-visualization", "data-analysis", "camera-preview", "pyqtgraph", "spe", "sif"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2019-03-18T13:45:16Z"
lastCommitAt: "2026-09-08T08:16:08Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 50
maintainers: ["aline-vernier", "SemionTche", "julienGautier77"]
openGraphImageUrl: "https://opengraph.githubassets.com/83210b314aa35a0a779c5e25e059a209f5284a171654830a7a2b47aa0e207b35/julienGautier77/visu"
---

# Visu

Visu is an user interface library based on pyqtgraph to open and process data image .
It can make plot profile and data measurements analysis on live

It can open .spe .SPE, .sif and .TIFF files

    https://github.com/julienGautier77/visu

## Requirements
*   python 3.x
*   Numpy
*   matplotlib
*   scipy
*   PyQt6
*   pyqtgraph (https://github.com/pyqtgraph/pyqtgraph.git) 
    * Pip install pyqtgraph
*   qdarkstyle (https://github.com/ColinDuquesnoy/QDarkStyleSheet.git)
    * pip install qdarkstyle
*  sifread.py
    *   https://github.com/lightingghost/sifreader/tree/master/sifreader
*  winspec.py 
    *   https://github.com/antonl/pyWinSpec
    
## Installation
*   from PyPi
    *   pip install git+https://github.com/julienGautier77/visu

## Usage
###  to use as  it:
    import visu
    visu.visual.runVisu()

Or :

    from PyQt6.QtWidgets import QApplication
    import sys
    import qdarkstyle
    import visu
    
    appli = QApplication(sys.argv)   
   
    e = visu.visual.SEE() 
    e.show()
    appli.exec_()
    
  ### To  insert in  a  code
  visu is a  QtWidgets it can be use like  a  widget :  
  from PyQt6.QtWidgets import QApplication,QWidget…
