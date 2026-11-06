---
repo: "mozfr/www"
name: "www"
description: "files for https://mozfr.org/"
readmeQualityOk: true
url: "https://github.com/mozfr/www"
homepage: "https://mozfr.org/"
language: "CSS"
languages: ["CSS", "Twig"]
languagePcts: [64, 28]
stars: 7
forks: 26
openIssues: 7
closedIssues: 48
watchers: 7
contributors: 25
recentReleases: 0
createdAt: "2012-05-01T12:21:46Z"
lastCommitAt: "2026-11-06T13:20:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 75
undervaluedScore: 72
maintainers: ["ArnaudLigny", "pascalchevrel"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8ef73fdc814613f03fac89ee7b9348e232909f7970a31d54e519830430212bc/mozfr/www"
---

Ceci est le code source de notre portail Mozilla francophone <https://mozfr.org/>.

Le site utilise le générateur statique Cecil <https://cecil.app/>. Les templates
utilisent Twig.

## Installer le site en local

Vous devez d'abord forker le dépôt:
```
git clone https://github.com/votreforkdudépot/www/
cd www
```

**Note: Cecil requière l'extension PHP `ext-gd`.**

Installez Cecil avec [Composer](https://getcomposer.org) le gestionnaire de
dépendances de PHP:

```
composer install
```

Une fois les dépendances installées, vous pouvez lancer le serveur de
développement local avec cette commande dans votre terminal:

```
composer serve:dev
```

Le site sera à l'adresse http://localhost:8000. Lorsqu'un changement est effectué
dans un fichier source, Cecil regénérera le dossier de sortie et rafraîchira le
navigateur sautomatiquement.

Vous pouvez aussi exécuter toutes les autres commandes de Cecil avec:

```
composer cecil [nom de la commande]
```

Tous les fichiers source (HTML, JS, CSS, images, polices…) sont dans le
dossier `source`. Le dossier de sortie se trouve dans `source/_site`.

## Outils de validation et de _formatage_ du code

Pour les utiliser, vous devez tout d'abord…
