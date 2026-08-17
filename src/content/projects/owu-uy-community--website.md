---
repo: "owu-uy-community/website"
name: "website"
description: "¡Un espacio donde personas apasionadas por la tecnología se reúnen, comparten y convierten sus ideas en realidad!"
readmeQualityOk: true
url: "https://github.com/owu-uy-community/website"
homepage: "https://www.owu.uy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["comunidad", "it", "meetups", "uruguay"]
stars: 11
forks: 9
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2023-05-27T03:33:46Z"
lastCommitAt: "2026-08-17T04:19:47Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 74
maintainers: ["agustints", "dependabot[bot]", "kexposito"]
openGraphImageUrl: "https://opengraph.githubassets.com/45b904072c7f3bf897e44da1cadfae6f4cf24ecb502b1eeea347bf049b4ae256/owu-uy-community/website"
discussionCount: 0
---

# 🚀 OWU - Website

## 📖 Descripción

OWU.uy es una aplicación web construida con Next.js 15, TypeScript y una rica colección de herramientas y librerías modernas. Diseñada para ofrecer una experiencia de usuario excepcional con un rendimiento óptimo.

## 🛠️ Tecnologías Principales

- Next.js 15
- TypeScript
- Tailwind CSS
- Supabase
- Radix UI (shadcn/ui)
- Motion
- Remotion
- React Hook Form
- Zod (validación)

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión recomendada: 18.x o superior)
- pnpm (recomendado) o npm
- Git

### Instalación

1. Clona el repositorio:

```bash
git clone git@github.com:owu-uy-community/website.git
cd owu
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Copia el archivo de variables de entorno:

```bash
cp .env.example .env
```

4. Configura las variables de entorno en el archivo `.env`

5. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
owu/
├── src/                    # Código fuente principal
│   ├── app/               # Rutas y páginas de la aplicación
│   ├── components/        # Componentes reutilizables
│   └──…
