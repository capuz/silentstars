---
repo: "spechshop/libspech"
name: "libspech"
description: "Biblioteca PHP completa para comunicação VoIP em tempo real via SIP/RTP"
readmeQualityOk: true
url: "https://github.com/spechshop/libspech"
homepage: "https://phone.spechshop.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php-sip", "rtpproxy", "sip", "sip-client", "voip-communications", "php-rtp", "php-softphone", "php-async", "swoole", "libspech"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-23T01:22:13Z"
lastCommitAt: "2026-08-22T04:07:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 67
maintainers: ["berzersks"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1102187858/0c66d60a-a410-4180-8ab6-c2c4e601bd34"
discussionCount: 2
---

# libspech

Biblioteca VoIP SIP/RTP em tempo real para PHP, construída com corrotinas Swoole. Faça e receba chamadas telefônicas de PHP, transmita
audio RTP, manipule DTMF e grave áudio.

> **📖 OPEN SOURCE** - Copyright © 2026 Lotus / berzersks
> Licensed under Apache 2.0. Free to use, modify, and distribute.
> **Please respect the creator and contribute at the [official repository](https://github.com/spechshop/libspech)**

## Visão Geral

libspech fornece:

- Recursos de user-agent SIP: registro, configuração/desmontagem de chamadas (INVITE/200/ACK/BYE), autenticação digest
- Canais de mídia RTP/RTCP: receber e enviar quadros de áudio
- API orientada a eventos com callbacks para toque, resposta, desligamento e áudio recebido
- Envio de DTMF (RFC 2833)
- Auxiliares de gravação WAV para PCM capturado
- I/O assíncrono de alto desempenho via Swoole

> 📘 **Nova Documentação**: Veja **[SIGNALING_ARRAYS.md](https://github.com/spechshop/libspech/blob/HEAD/SIGNALING_ARRAYS.md)** para entender em profundidade como os arrays de sinalização SIP são construídos e processados.

Este README reflete o repositório a partir de 2026-06-02.

## Índice

- [Stack](#stack)
- [Requisitos](#requisitos)…
