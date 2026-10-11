---
repo: "alipirpiran/Crypto-Price-Tracker-for-Gnome-Shell"
name: "Crypto-Price-Tracker-for-Gnome-Shell"
description: "An extension for Gnome-Shell to track price of crypto-currencies"
readmeQualityOk: true
url: "https://github.com/alipirpiran/Crypto-Price-Tracker-for-Gnome-Shell"
homepage: "https://extensions.gnome.org/extension/2817/crypto-price-tracker/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["gnome-extension", "extension", "gjs", "gnome-shell-extension", "gnome-shell", "cryptocurrency", "gnome"]
stars: 57
forks: 15
openIssues: 11
closedIssues: 21
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2020-03-23T13:28:20Z"
lastCommitAt: "2026-10-11T10:12:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 37
maintainers: ["Strykar", "alipirpiran"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb39cfc734dd40d492b400acbc01f1599f7e6b73559fa51c554c3066fe43046e/alipirpiran/Crypto-Price-Tracker-for-Gnome-Shell"
---

# Crypto Price Tracker for Gnome-Shell

 
An extension for Gnome-Shell to track price of Crypto currencies.
 
 
* Refresh price every 10 sec
* Add new pair e.g BTC/USDT
* Sources: Binance, OKX, Coingecko
* [Display multiple coins](#display-multiple-coins)

## Installation

### Through extensions.gnome.org (Local installation)

Go on the [CryptoPriceTracker](https://extensions.gnome.org/extension/2817/crypto-price-tracker/) extension page on extensions.gnome.org, click on the switch ("OFF" => "ON"), click on the install button. That's it !

### With source code

Clone the git repo:

``` shell
$ git clone https://github.com/alipirpiran/Crypto-Price-Tracker-for-Gnome-Shell.git
```

Create extension dir and Copy files in it:

``` shell
$ mkdir -p ~/.local/share/gnome-shell/extensions/crypto@alipirpiran.github/ 

$ cp -r ./Crypto-Price-Tracker-for-Gnome-Shell/* ~/.local/share/gnome-shell/extensions/crypto@alipirpiran.github/
```

* Restart Gnome-shell. (ALT+F2, r, Enter)

* You may need to enable the extension via Gnome Tweaks

## Display multiple coins

Activate multiple coins from the menu and display them all in the top bar.  
  

Thanks to [azorpax](https://github.com/azorpax) for…
