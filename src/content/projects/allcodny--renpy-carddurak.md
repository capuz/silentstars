---
repo: "allcodny/renpy-CardDurak"
name: "renpy-CardDurak"
description: "Russian card game \"Durak\" for use in Ren'Py games"
readmeQualityOk: true
url: "https://github.com/allcodny/renpy-CardDurak"
language: "Ren'Py"
languages: ["Ren'Py"]
languagePcts: [100]
topics: ["game", "mini-game", "renpy", "renpy-applications", "renpy-game", "renpy-mod", "renpy-minigame"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-23T06:08:49Z"
lastCommitAt: "2026-07-14T05:53:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 30
maintainers: ["allcodny"]
openGraphImageUrl: "https://opengraph.githubassets.com/32cff57c96479a5514167fbae8c1570bfda04b1cedf1539858b497e6dcb17ecf/allcodny/renpy-CardDurak"
---

# Card Durak for Ren'Py

## About
"Durak" is a classic Russian card game, a throw-in and translation version for Ren'Py games.

The `ruls.rpy` file describes the rules of the game.

The main feature of this code compared to the rest is the character's interactivity during the game: an image is displayed, emotions change, phrases are pronounced with some chance. However, if necessary, all this can be disabled in the `settings.rpy` file. Also, with the help of this file, you can easily change various settings (phrases, texts, character behavior, who goes first, etc.).

After the game is over, the `who_win_` variable is returned with a value of 0 (the opponent won), 1 (draw) or 2 (the player won)

## How to use
To use the card "Durak" in your game, place the `durak` folder in the `game` directory of your Ren'Py game, and copy all the files from `images` to the corresponding folder of your project.

You can customize the game to your needs using the `settings.rpy` file. Each setting has detailed comments.

To call the game, use `call durak_game`:
```
    e "Let's play the card durak!"

    call durak_game

    # here are the actions after the game, we need to show the background and…
