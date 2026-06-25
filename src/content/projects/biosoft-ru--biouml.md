---
repo: "Biosoft-ru/BioUML"
name: "BioUML"
description: "BioUML platform"
url: "https://github.com/Biosoft-ru/BioUML"
homepage: "https://biouml.org"
language: "Java"
languages: ["Java"]
languagePcts: [80]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2024-08-14T07:56:15Z"
lastCommitAt: "2026-06-25T06:40:49Z"
lastReleaseAt: "2024-08-30T06:49:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 67
maintainers: ["momofant", "yevshin", "Existanze54"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fad86469566f719a127309b0f03e8f8ddcc3191a3b07a9032b11dbb373b90de/Biosoft-ru/BioUML"
---

# To Build

Ensure that you have at least Java 21

Manually install JARs missing in Maven Central

```sh
./install_all_old_jars.sh 
```

Now build BioUML

```sh
mvn package -DskipTests
```

# To Run

First, start mysql server. The command below is for docker but you can easiliy adopt it to your situation

```sh
docker run --name mysql-biouml2 \
   -p 3306:3306 \
   -v ./dumps/bioumlsupport2.dump.sql:/docker-entrypoint-initdb.d/bioumlsupport2.dump.sql \
   -e MYSQL_ROOT_PASSWORD=biouml \
   -e MYSQL_DATABASE=bioumlsupport2 \
   -e MYSQL_USER=bioumlsupport2 \
   -e MYSQL_PASSWORD=bioumlsupport2 \
   -d mysql:5
```

Alternatively, you can launch mysql server via [docker-compose](docker-compose.yaml)  

Then launch BioUML Web edition.

```sh
mvn -pl tomcat-embedded exec:java
```

For Java versions newer than 11 you can use experimental forked launch mode

```sh
mvn -pl tomcat-embedded exec:exec@run-forked
```

Use your browser to open it at http://localhost:8080/bioumlweb/

# To Run tests

On Linux install required packages
```sh
sudo apt install r-base r-base-dev
```

Ensure that you have at least Java 21

```sh
mvn -pl src test 
```
or simply

```sh
mvn test 
```
