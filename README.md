# siva-sitepackage-bs
Kickstarter Sitepackage to Create Typo3 Websites based on Bootstrap

first step in root Directory -> composer.json add in first bracket, 	"repositories": [
		{
			"type": "path",
			"url": "extensions/*",
      "options": {
				"symlink": true
			}
		}
	],
  otherwise, ddev composer won´t find the Extension.

	A basic footer is created in the daynamicFooter.TsConfig where you can also redesign the footer. 

	Then, create a page in the backend of the Typo3 site and set the backend layout to dynamic-footer under the Appearance menu tab.
  