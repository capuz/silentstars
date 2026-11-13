---
repo: "CambonOS/cambonos-installer"
name: "cambonos-installer"
description: "CambonOS installer for Arch Linux, with support for BIOS and UEFI installations and automated system configuration."
readmeQualityOk: true
url: "https://github.com/CambonOS/cambonos-installer"
homepage: "https://cambonos.org"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [61, 39]
topics: ["archlinux", "bash-script", "bash", "distribution", "installer", "linux", "operating-system"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-04-12T19:58:09Z"
lastCommitAt: "2026-11-13T18:35:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 82
maintainers: ["ManuCr19", "Cambon18", "CambonOS"]
openGraphImageUrl: "https://opengraph.githubassets.com/574b25749fa71a49d2e8b41ac50c976974de787bcc76f8fa481dd69f616c9b79/CambonOS/cambonos-installer"
---

# CambonOS
Distribución basada en Arch Linux con una instalación sencilla.

## Paquete `cambonos-installer`

El `PKGBUILD` construye el paquete Arch `cambonos-installer`. El ejecutable
`/usr/bin/cambonos-installer` contiene el flujo completo: selección de opciones,
particionado, instalación y configuración del sistema. La configuración base del
live se empaqueta directamente bajo `/usr/share/cambonos-installer/configs/` y
se incorpora al sistema sin una carpeta intermedia `cambonos-fs`.
Está destinado al entorno live de CambonOS y debe ejecutarse como root.

Al iniciar el instalador, se activa NetworkManager y se comprueba la conexión al
mirror geo de Arch. Tras cinco fallos se abre `nmtui` y se vuelve a intentar.
Después se ejecuta `pacman -Sy --noconfirm cambonos-installer` y se muestra su
salida; si falla, la instalación no continúa. Tras una actualización correcta,
el instalador se reinicia una vez para usar la versión instalada, incluso si no
había una versión nueva. La opción `--help` no realiza estas operaciones.

Permite una instalación limpia en BIOS o UEFI, o instalar en el mayor espacio
libre contiguo disponible en un disco GPT iniciado en modo UEFI. El modo de
espacio…
