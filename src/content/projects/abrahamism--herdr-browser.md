---
repo: "Abrahamism/herdr-browser"
name: "herdr-browser"
description: "Real Chromium browser (Brave/Chrome/Edge) driven by your coding agent through CDP, with a visible cursor and Chrome extensions"
readmeQualityOk: true
url: "https://github.com/Abrahamism/herdr-browser"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["brave", "browser-automation", "cdp", "chrome-extensions", "herdr", "herdr-plugin", "herdr-mod"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-10-31T23:01:05Z"
lastCommitAt: "2026-11-12T05:36:42Z"
lastReleaseAt: "2026-11-12T05:37:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 46
maintainers: ["Abrahamism"]
openGraphImageUrl: "https://opengraph.githubassets.com/3eed79fa4f097aa40046ea9893de1766de3e5da8b2349fc6d5172cf9c031eef5/Abrahamism/herdr-browser"
---

Navegador Chromium real (Brave por defecto) con control por CDP y soporte de extensiones de Chrome, pensado para usarse desde herdr.

## Qué es

herdr-browser lanza un navegador Chromium en su propia ventana con un perfil dedicado y un endpoint de depuración (CDP). El agente controla la pestaña por CDP (clic, escritura, teclas, desplazamiento, capturas) sin mover el puntero físico ni robar el mouse del usuario. Se integra a herdr-app con el mod `browser-tabs`, que lista las pestañas en un panel.

## Versión 1.2.0

Lo que trae esta entrega. Cada punto tiene su sección más abajo.

| Mejora | Cómo se usa | Qué resuelve |
|---|---|---|
| Esperar sin polling | `wait --for ...` | Bloquea hasta que la página llega al estado pedido; un timeout sale con código 1, nunca como éxito |
| Ceder el navegador | `handoff --message ...` | Login, 2FA o CAPTCHA: lo hace la persona y el agente sigue solo |
| Retos anti-bot | `open --challenge-wait` | Reporta Cloudflare, Akamai, DataDome, PerimeterX, Imperva, AWS WAF y CAPTCHA en vez de fingir que la página cargó |
| Menos detectable | automático | Sin `Runtime.enable`, sin refs en el DOM, cursor en shadow root cerrado, `navigator.webdriver` en false |…
