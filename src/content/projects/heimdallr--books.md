---
repo: "heimdallr/books"
name: "books"
description: "FLibrary: another e-book cataloger"
readmeQualityOk: true
url: "https://github.com/heimdallr/books"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["cpp", "qt", "sqlite3", "cmake", "epub", "fb2"]
stars: 97
forks: 12
openIssues: 5
closedIssues: 714
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-03-04T10:59:22Z"
lastCommitAt: "2026-09-13T08:29:31Z"
lastReleaseAt: "2023-12-01T15:52:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 48
maintainers: ["heimdallr", "SignFinder"]
openGraphImageUrl: "https://opengraph.githubassets.com/afb3708c11ce4d73033c91a94c1d5cbf9da6b00415c95ae54b54765edfd417d7/heimdallr/books"
---

# FLibrary - каталогизатор электронной библиотеки

<details>
<summary>Скриншоты</summary>
</details>

## Сборка

#### Клонируем исходники с сабмодулями
```
git clone https://github.com/heimdallr/books.git --recursive
```

#### Устанавливаем и настраиваем conan
[Инструкция](https://docs.conan.io/2/installation.html)  

#### Устанавливаем модули, которых нет в conan
* Qt6 (6.10.0 минимум, но лучше 6.11) [^4] [^5]  
* 7zip  

<br/>

### Windows  
<hr/>
Проверялось на Windows 10 и 11, компилятор от MS в средах MSVS2022 и QtCreator

#### Добавляем в PATH пути к: 
* conan.exe  
* cmake.exe, версия cmake должна поддерживать вашу версию MSVS, conan,... короче, берите cmake посвежее  
* git.exe, необязательно, но полезно, позволит в логах видеть хэш текущего коммита  
* Inno Setup, если нужен инсталлятор  

#### Конфигурируем:
В батнике configure.bat поменять пути к зависимостям на ваши, запустить его. Возможно, сработают и другие способы, типа cmake-gui, или открыть в MSVS папку с исходниками.  

#### Собираем:
В результате конфигурирования в папке build будет создан солюшн FLibrary.sln. В нём надо собрать проект FLibrary.  

#### Ещё варианты:
* Можно запустить батник build.bat. Если…
