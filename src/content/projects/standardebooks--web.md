---
repo: "standardebooks/web"
name: "web"
description: "The source code for the Standard Ebooks website."
readmeQualityOk: true
url: "https://github.com/standardebooks/web"
homepage: "https://standardebooks.org"
language: "PHP"
languages: ["PHP"]
languagePcts: [88]
stars: 291
forks: 71
openIssues: 0
closedIssues: 136
watchers: 13
contributors: 69
recentReleases: 0
createdAt: "2018-12-29T21:21:27Z"
lastCommitAt: "2026-08-24T04:22:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["acabal", "cbbowman", "SpaceManiac"]
openGraphImageUrl: "https://opengraph.githubassets.com/7896ddd7102bbcb791e7fff49af3752ef47183f07fb761a2dbadd3c88ba248fe/standardebooks/web"
---

# Installation

PHP 8+ is required.

## Installing on Ubuntu 22.04

```shell
# Set up the Manticore APT list.
# As of Ubuntu 26.04, Manticore is still not included as a system package.
wget https://repo.manticoresearch.com/manticore-repo.noarch.deb
sudo dpkg -i manticore-repo.noarch.deb
rm manticore-repo.noarch.deb

# Install Apache, PHP, PHP-FPM, and various other dependencies.
sudo apt update
sudo apt install -y git composer php-fpm php-cli php-gd php-xml php-apcu php-mbstring php-intl php-curl php-zip php-mysql apache2 apache2-utils libfcgi0ldbl task-spooler ipv6calc mariadb-server attr libapache2-mod-xsendfile libimage-exiftool-perl librsvg2-bin task-spooler attr php-mailparse manticore php-imap

# Create the site root and logs root and clone this repo into it.
sudo mkdir /standardebooks.org/
sudo chown $(whoami): /standardebooks.org
sudo mkdir /var/log/local/
cd /standardebooks.org/
git clone https://github.com/standardebooks/web/

# Install dependencies using Composer.
cd /standardebooks.org/web/
composer install

# Install the SE toolset as a library in `.venv` so we can use it in some scripts.
python3 -m venv .venv
source .venv/bin/activate
pip3 install standardebooks…
