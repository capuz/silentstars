---
repo: "thisancog/mp-custom-fields"
name: "mp-custom-fields"
description: "Wordpress Custom Fields Manager"
readmeQualityOk: true
url: "https://github.com/thisancog/mp-custom-fields"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [65, 23]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-03-30T09:49:36Z"
lastCommitAt: "2026-11-03T19:05:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 38
maintainers: ["thisancog"]
openGraphImageUrl: "https://opengraph.githubassets.com/173902077764754a86499d58b7d439a08714681a922983b30e4d240b1c9a0f5d/thisancog/mp-custom-fields"
---

# MP Custom Fields

A Wordpress plugin to offer easy, performant, flexible and robust custom fields management with UI in mind.
The motivation behind this project was to create an alternative to popular custom fields plugins which too often sacrifice speed and ease of use for a maximum range of customisability.

This plugin offers a simple interface to register new custom fields from within the code, while a GUI interface is currently in the making.

## Usage

There is no extensive documentation yet, however, most of the code should be easily understandable anyway. A simple example to register a new meta box with several custom fields could look like this:

    // fields are organised in panels
    $panelMedia = array(
	    'name'		=> 'Media',
		'icon'		=> 'dashicons-images-alt',
		'fields'	=> array(
			array(
				'name'	=> 'thumbnail2',
				'title'	=> 'Additional featured image',
				'type'	=> 'media'
			),
			array(
				'name'	=> 'thumbcrop',
				'title'	=> 'Crop',
				'type'	=> 'buttongroup',
				'options'	=> array(
					'none'		=> 'none',
					'top'		=> 'top',
					'bottom'	=> 'bottom'
				),
				'default'	=> 'none',
				'description'	=> 'If and how to crop this image.'
			),…
