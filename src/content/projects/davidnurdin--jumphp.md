---
repo: "davidnurdin/jumPhp"
name: "jumPhp"
description: "PHP framework for retro 2D games running on the desktop and in the browser (WebAssembly), Docker-only"
readmeQualityOk: true
url: "https://github.com/davidnurdin/jumPhp"
homepage: "https://jumphp.net"
language: "PHP"
languages: ["PHP"]
languagePcts: [76]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-10-27T17:11:09Z"
lastCommitAt: "2026-10-29T21:23:48Z"
lastReleaseAt: "2026-10-29T17:52:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["davidnurdin"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fa8b454ec5a5a9006586231e819064df1d3ebe24cae9a82859089be1d9435a8/davidnurdin/jumPhp"
---

# JumPHP

[Français](#français) · [English](#english)

---

## Français

**Un framework PHP pour créer des jeux rétro 2D** (SDL2) qui tournent **sur le bureau** (PHP natif) et
**dans le navigateur** (PHP compilé en WebAssembly), avec exactement le même code.

**Essayer sans rien installer : [jumphp.net](https://jumphp.net)**, le playground (les jeux, un bac à sable,
la documentation et les tutoriels).

Tiles et collisions au pixel (pentes, plateformes, cartes Tiled), entités et animations, caméra, son
(fichiers ou sons générés), menus, sauvegardes, traductions, clavier / manette / tactile, multijoueur en
ligne. **Tout passe par Docker** : la machine n'a besoin que de Docker (plus d'un écran et d'un serveur son
pour jouer sur le bureau). Jamais de PHP, d'emscripten ou de node à installer.

### Nouveau projet

En une ligne (Linux, macOS, WSL ; sous Windows dans PowerShell : `irm https://jumphp.net/install.ps1 | iex`) :
la commande `jumphp` ([install.sh](https://github.com/davidnurdin/jumPhp/blob/HEAD/install.sh)), puis le projet.

```bash
curl -fsSL https://jumphp.net/install.sh | sh -s -- mon-jeu
```

Ou avec Composer :

```bash
composer create-project jumphp/jumphp mon-jeu
```

Le…
