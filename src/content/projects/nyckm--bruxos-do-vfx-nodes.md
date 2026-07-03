---
repo: "NyckM/Bruxos-do-VFX-Nodes"
name: "Bruxos-do-VFX-Nodes"
description: "nodes para vfx e low vram do Bernini"
url: "https://github.com/NyckM/Bruxos-do-VFX-Nodes"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 23]
stars: 7
forks: 1
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-30T13:52:19Z"
lastCommitAt: "2026-07-03T12:40:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 37
maintainers: ["NyckM"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f2eda6b8106922a43de382b484b3120c6599bb60738edaefd6eca4815dda233/NyckM/Bruxos-do-VFX-Nodes"
---

Workflow para remover objetos e pessoas

https://github.com/user-attachments/assets/1575f97f-34b9-492a-accb-818e97a6cbde

resultados, tempo média de 96 frames em 204 segundos

https://github.com/user-attachments/assets/d1e47486-ac3b-4030-be42-56a0f16b0128


Essa ferramenta foi desenvolvida especificamente para duas produções: Dr Monstro de Marcos jorge e Alice júnior 2 de Gil Baroni.
dois longas metragens com alguns vfx realizados aqui na produtora bruxos do VFX, onde a demanda gerou a necessidade de criar a ferramenta de remoção de objetos para auxiliar na composição e integração das cenas. 
## Instalacao fácil

Usando o Bat dentro da pasta de instalação do ComfyUI, assim ele já baixa os modelos e o custom node automaticamente para você.
Versão para Runpod, ainda em desenvolvimento

## Instalacao

Copie a pasta `comfyui-bernini-long-conditioning` para:

```text
ComfyUI/custom_nodes/
```

https://huggingface.co/neuregex/Bernini-R-GGUF/tree/main
Modelo GGufs
que vão instalados na pasta ComfyUI\models\unet

https://huggingface.co/Cyph3r/lightx2v_T2V_14B_cfg_step_distill_v2_lora_rank64_bf16
lora que vai na pasta ComfyUI\models\lora…
