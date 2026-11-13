---
repo: "LeandroLS/SnakeGame"
name: "SnakeGame"
description: "Snake Game build with Javascript and HTML Canvas"
readmeQualityOk: true
url: "https://github.com/LeandroLS/SnakeGame"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [51, 37]
topics: ["canvas", "css", "game", "html", "javascript"]
stars: 5
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-01-29T23:03:50Z"
lastCommitAt: "2026-11-13T11:21:22Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 55
maintainers: ["AnaCrisBrito", "LeandroLS"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac967ecea00f8683d6ff23154d667f1fcd1d153bb89712579ed3e5b84a7ea431/LeandroLS/SnakeGame"
---

# SnakeGame

Jogo da cobrinha (Snake) feito com JavaScript e HTML Canvas.

## Como jogar

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` no navegador. Não é preciso instalar nada nem usar servidor.
3. Use as **setas do teclado** para mover a cobra.

**Regras**
- Comer a comida (quadrado vermelho) faz a cobra crescer e aumenta a pontuação, mostrada em *Snake Size*.
- Ao sair por uma borda, a cobra reaparece na borda oposta.
- Se a cabeça encostar no próprio corpo, o jogo termina (*Game Over*) e reinicia.
- A cobra não pode dar meia-volta de uma vez (por exemplo, ir de "direita" direto para "esquerda").

## Estrutura do projeto

```
SnakeGame/
├── assets/            Imagens e som (beep.mp3)
├── objects/
│   ├── World.js       Tabuleiro: único responsável por desenhar no canvas
│   ├── Snake.js       Cobra: movimento, crescimento, colisão e desenho
│   └── Food.js        Comida: sorteio de posição e desenho
├── test/              Testes
├── config.js          Constantes do jogo (tamanhos, cores, intervalo, direções)
├── game.js            Ponto de entrada: monta o jogo e executa o loop principal
├── index.html         Página do jogo
└── style.css          Estilos
```…
