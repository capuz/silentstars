---
repo: "bonna79/MiSTer_MediaCenter"
name: "MiSTer_MediaCenter"
description: "Lettore DVD, Video CD, SVCD, DivX/MP4 e musica per MiSTer FPGA, con uscita HDMI e CRT 15 kHz · DVD, Video CD, SVCD, DivX/MP4 and music player for MiSTer FPGA, HDMI and 15 kHz CRT output"
readmeQualityOk: true
url: "https://github.com/bonna79/MiSTer_MediaCenter"
language: "C"
languages: ["C", "C++"]
languagePcts: [51, 37]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 128
recentReleases: 10
createdAt: "2026-10-10T20:51:47Z"
lastCommitAt: "2026-11-15T11:24:15Z"
lastReleaseAt: "2026-10-31T21:53:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["claude", "alanswx", "misteraddons"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb727a3ad2063eded60e588aaf6131c144085d6bcfb067e146ba378c653de80a/bonna79/MiSTer_MediaCenter"
---

# MiSTer MediaCenter (MMC)

**Italiano** · [English](https://github.com/bonna79/MiSTer_MediaCenter/blob/HEAD/README_EN.md)

> Questo progetto è stato sviluppato con l'aiuto dell'intelligenza artificiale: il codice e la documentazione sono stati scritti con Claude, l'IA di Anthropic, e provati da rgm su un MiSTer vero.

## Cos'è

MiSTer MediaCenter (MMC) trasforma il MiSTer FPGA (DE10-Nano) in un lettore multimediale per dischi e file video e audio. Un solo programma, con gli stessi comandi, riproduce DVD-Video, Video CD, Super Video CD, video DivX/Xvid/MP4 e musica.

È pensato per i formati a **risoluzione standard**, quella di un DVD o più bassa, e per due tipi di schermo:

- **televisori LCD**, con il collegamento HDMI, alla risoluzione del televisore;
- **soprattutto televisori CRT**, con l'uscita analogica VGA a **15 kHz**: il video arriva al CRT con il suo segnale originale, 576i per i DVD PAL e 480i per gli NTSC, senza conversioni, e l'immagine si adatta al televisore con Regola CRT.

Le due uscite funzionano insieme: lo stesso video va al televisore LCD in HDMI e al CRT in VGA.

Il processore ARM del MiSTer legge e decodifica dischi e file. L'FPGA si occupa dell'uscita…
