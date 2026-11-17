---
repo: "GeiserX/DeclaRenta"
name: "DeclaRenta"
description: "Convierte informes de brokers extranjeros en declaraciones fiscales españolas: Modelo 100 (Renta), Modelo 720, Modelo 721 (cripto) y D-6. 100% gratuito, privado y self-hosted."
readmeQualityOk: true
url: "https://github.com/GeiserX/DeclaRenta"
homepage: "https://declarenta.com/docs/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["aeat", "browser", "capital-gains", "degiro", "dividends", "fifo", "hacienda", "ibkr", "interactive-brokers", "irpf"]
stars: 57
forks: 9
openIssues: 4
closedIssues: 68
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-04-10T17:05:17Z"
lastCommitAt: "2026-11-17T12:16:03Z"
lastReleaseAt: "2026-04-16T08:23:10Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 42
maintainers: ["GeiserX", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1207185051/c80a9828-a147-484e-b2dd-72df7e849d30"
fundingLinks: ["GITHUB:https://github.com/GeiserX", "PATREON:https://patreon.com/geiser", "BUY_ME_A_COFFEE:https://buymeacoffee.com/geiser", "THANKS_DEV:https://thanks.dev/u/gh/geiserx"]
---

DeclaRenta es una aplicación web gratuita que lee los informes de tu broker extranjero y calcula las casillas de la renta con FIFO y los tipos de cambio oficiales del BCE. Renta Web no importa esos datos, así que sin esto hay que hacerlo a mano. Funciona en [declarenta.com](https://declarenta.com) sin registro, o en tu propio equipo con Docker.

## Funcionalidades

- Tus ventas de IBKR, Degiro y otros 11 brokers en un solo FIFO, con el tipo del BCE del día de cada operación.
- Las casillas 0328, 0331, 1633, 1637, 0029, 0027 y 0588 del Modelo 100 con su importe, y una guía de dónde escribir cada una en Renta Web.
- El fichero del Modelo 720 listo para subir a la AEAT, validado contra la especificación del BOE, y el aviso de si superas los 50.000 EUR.
- La revisión del Modelo 721 (cripto) y la guía del D-6 a partir de los mismos ficheros.
- La regla anti-churning aplicada de forma proporcional y la deducción por doble imposición por país. La compensación de pérdidas de los cuatro años anteriores solo está en la CLI (`--prior-losses`), que muestra el resultado en la consola.
- Splits, fusiones, spin-offs y scrip dividends tratados según la LIRPF, para acciones, ETFs, opciones,…
