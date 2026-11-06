---
repo: "marcelomaurin/cockpit_drone"
name: "cockpit_drone"
description: "Cockpit Drone is an application that allows you to connect wifi drones in special cx-10W from cheerson on PC. Allowing the interaction via joystick. Allowing the user to have a typically military experience with his civilian drone (UAV)."
readmeQualityOk: true
url: "https://github.com/marcelomaurin/cockpit_drone"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2018-11-19T15:19:20Z"
lastCommitAt: "2026-11-06T12:18:43Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 65
undervaluedScore: 50
maintainers: ["marcelomaurin", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/875ce10e7f123a5eec8a183a9d2a733cd5603f26576ac70a7d9b6ab4221d59ed/marcelomaurin/cockpit_drone"
---

# Sistema de Controle e Monitoramento de Drones

---

## Seção 1: Português

### Visão Geral do Projeto

Este projeto, desenvolvido em Object Pascal (Lazarus/Free Pascal), constitui uma aplicação para controle remoto e monitoramento de drones. Ele integra múltiplos dispositivos e funcionalidades, tais como joystick, GPS, câmera e mapas, oferecendo uma interface gráfica central para o usuário gerenciar e visualizar o status do drone e dos periféricos conectados.

### Estrutura do Projeto

- **main.pas**  
  Implementa a interface gráfica principal do sistema. Gerencia a ativação e monitoramento dos controles, incluindo joystick, drone, GPS, câmera e mapa, usando LEDs e controles visuais. Processa comandos do joystick e controla a conexão com o drone via formulário específico.

- **config.pas**  
  Interface para configuração dos parâmetros de comunicação e seleção do joystick. Permite a visualização e teste em tempo real dos eixos e botões do controlador, integrando-se com a interface principal.

- **joystick.pas**  
  Arquivo atualmente vazio, reservado para implementações futuras relacionadas ao joystick.

- **gps.pas**  
  Formulário responsável pela leitura de dados GPS via…
