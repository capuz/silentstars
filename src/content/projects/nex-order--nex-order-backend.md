---
repo: "Nex-Order/nex-order-backend"
name: "nex-order-backend"
description: "REST API for order management, handling products, payments, customers and employees."
readmeQualityOk: true
url: "https://github.com/Nex-Order/nex-order-backend"
language: "Java"
languages: ["Java"]
languagePcts: [80]
stars: 32
forks: 3
openIssues: 64
closedIssues: 42
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2025-11-20T12:00:47Z"
lastCommitAt: "2026-10-25T22:10:45Z"
status: "thriving"
tags: []
healthScore: 66
undervaluedScore: 47
maintainers: ["claudiabeathriz", "martinssluis", "nicollaswendel"]
openGraphImageUrl: "https://opengraph.githubassets.com/aef9bb47bb3c988d7396279dc07d69fefc54c1bb2159b2cd680f9cb2834c8d15/Nex-Order/nex-order-backend"
---

# Nex Order API

Nex Order is a REST API built with Java 21 and Spring Boot 3.5.7, 
designed to manage sales—including customers, employees, products, 
orders, and payments—and featuring JWT-based login for employees. 
It follows a layered architecture (controller → service → repository → JPA entity) 
within a single Maven module, with the root package `com.aceleradev.nexorder`.

## 🚀 Technologies

- **Java 21**
- **Spring Boot 3.5.7**
- **Spring Data JPA**
- **H2 Database** (development)
- **PostgreSQL** (production)
- **Spring Security**
- **JWT**
- **MapStruct**
- **Lombok**
- **Swagger**
- **Docker**
- **Docker Compose**
- **Maven**

## Running with Docker

1. Copy the example file and set your database credentials:
   ```bash
   cp .env.example .env
   ```
2. Build and start the app:
   ```bash
   docker compose up --build
   ```
3. API: http://localhost:8080 · Swagger: http://localhost:8080/swagger

## 📂 Project Structure and Main Folders

nex-order-backend/
├── pom.xml, mvnw, mvnw.cmd, .mvn/      build Maven + wrapper
├── Dockerfile, docker-compose.yaml     imagem e execução em container
├── .env.example                        modelo das variáveis do banco
├──…
