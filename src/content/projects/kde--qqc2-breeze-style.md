---
repo: "KDE/qqc2-breeze-style"
name: "qqc2-breeze-style"
description: "Breeze inspired QQC2 Style"
readmeQualityOk: true
url: "https://github.com/KDE/qqc2-breeze-style"
homepage: "https://invent.kde.org/plasma/qqc2-breeze-style"
language: "QML"
languages: ["QML", "C++"]
languagePcts: [70, 26]
stars: 14
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 30
recentReleases: 0
createdAt: "2020-11-28T06:18:17Z"
lastCommitAt: "2026-08-26T15:17:37Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 62
undervaluedScore: 41
maintainers: ["bhush9", "espidev", "sandroandrade"]
openGraphImageUrl: "https://opengraph.githubassets.com/89b8676133cf95f3b6d2c248c2f6d3b14b15a2aa64bb49322079f5d900c73cff/KDE/qqc2-breeze-style"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# QQC2 Breeze Style

This is a style for Qt Quick Controls (also known as QQC2 in Qt5) which implements the KDE Visual Design Group's vision for Breeze in pure Qt Quick and Kirigami. 

This library has no public API, applications should not (and cannot) use it directly. Instead, developers should add this library as a dependency of their apps.

## Usage

The name of the style is `org.kde.breeze`.

On Plasma Mobile, this style should be used automatically. Ensure that your application does not override the style by accident by checking if `QT_QUICK_CONTROLS_STYLE` is set:

```c++
#include <QQuickStyle>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    // Default to org.kde.desktop style unless the user forces another style
    if (qEnvironmentVariableIsEmpty("QT_QUICK_CONTROLS_STYLE")) {
        QQuickStyle::setStyle(QStringLiteral("org.kde.desktop"));
    }

    QQmlApplicationEngine engine;
    ...
}
```

## Differences from QQC2 Desktop Style

Unlike [QQC2 Desktop Style](https://invent.kde.org/frameworks/qqc2-desktop-style), it does not depend on Qt Widgets and the system QStyle. This means you can use the lighter `QGuiApplication` instead of…
