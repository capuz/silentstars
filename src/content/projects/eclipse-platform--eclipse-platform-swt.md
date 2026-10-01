---
repo: "eclipse-platform/eclipse.platform.swt"
name: "eclipse.platform.swt"
description: "Eclipse SWT - The Standard Widget Toolkit"
readmeQualityOk: true
url: "https://github.com/eclipse-platform/eclipse.platform.swt"
homepage: "https://eclipse.dev/eclipse/swt/"
language: "Java"
languages: ["Java"]
languagePcts: [86]
topics: ["eclipse", "java", "swt", "ui", "cross-platform-gui", "gui"]
stars: 201
forks: 206
openIssues: 360
closedIssues: 747
watchers: 23
contributors: 177
recentReleases: 0
createdAt: "2022-03-28T08:31:40Z"
lastCommitAt: "2026-10-01T10:23:22Z"
status: "thriving"
tags: ["needs_contributors", "community_hub", "fork_magnet"]
healthScore: 93
undervaluedScore: 48
maintainers: ["akurtakov", "vogella", "HeikoKlare"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0bb6a21d40a0426fadcbcaed53f8b72c4f703b58029e3a159ade58669b6e98e/eclipse-platform/eclipse.platform.swt"
discussionCount: 95
---

# About

SWT is a cross-platform GUI library for JVM based desktop applications.
The best known SWT-based application is [Eclipse](https://www.eclipse.org).

For more information about SWT, visit the [official SWT page](https://eclipse.dev/eclipse/swt/).

## Getting Started

SWT comes with platform-specific jar files.
Download them from https://download.eclipse.org/eclipse/downloads and add the jar file to your classpath.

### Example

```java
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

public class HelloWorld {

	public static void main(String[] args) {
		final Display display = new Display();

		final Shell shell = new Shell(display);
		shell.setText("Hello World");
		shell.setLayout(new GridLayout(2, false));

		final Label label = new Label(shell, SWT.LEFT);
		label.setText("Your &Name:");
		label.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, false, false));

		final Text text = new Text(shell, SWT.BORDER | SWT.SINGLE);…
