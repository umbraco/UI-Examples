import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestTypes> = [
	{
		"type": "section",
		"name": "Example UI Dashboard",
		"alias": "example.ui.section",
		"weight": 900,
		"meta": {
			"label": "Example UI",
			"pathname": "example-ui"
		}
	},
  {
    "type": "dashboard",
    "alias": "example.ui.dashboard",
    "name": "Example UI Dashboard",
		"element": () => import("./scripts/dashboards/welcome-dashboard.ts"),
    "weight": -1,
    "meta": {
      "label": "Welcome Dashboard",
      "pathname": "welcome-dashboard"
    },
    "conditions": [
      {
        "alias": "Umb.Condition.SectionAlias",
        "match": "example.ui.section"
      }
    ]
  },
  {
    "type": "dashboard",
    "alias": "example.ui.dashboard.dialogs",
    "name": "Dialogs",
		"element": () => import("./scripts/dashboards/custom-dialogs-dashboard.ts"),
    "weight": -1,
    "meta": {
      "label": "Dialogs",
      "pathname": "dialogs"
    },
    "conditions": [
      {
        "alias": "Umb.Condition.SectionAlias",
        "match": "example.ui.section"
      }
    ]
  },
  {
    "type": "sectionView",
    "alias": "example.ui.dashboard.section.boxlayout",
		"element": () => import("./scripts/sections/box-layout-section.ts"),
    "name": "Box Layout",
    "meta": {
      "label": "Box Layout",
      "icon": "folder",
      "pathname": "box-layout"
    },
    "conditions": [
      {
        "alias": "Umb.Condition.SectionAlias",
        "match": "example.ui.section"
      }
    ]
  }
	// ... insert as many manifests as you like

    /*"extensions": [
    {
      "type": "section",
      "alias": "example.ui.section",
      "name": "Example UI Dashboard",
      "weight": -1,
      "meta": {
        "label": "Example UI",
        "pathname": "my-dashboard"
      }
    },
    {
      "type": "dashboard",
      "alias": "example.ui.dashboard",
      "name": "Example UI Dashboard",
      "js": "/App_Plugins/Example.UI/scripts/dashboards/welcome-dashboard.js",
      "weight": -1,
      "meta": {
        "label": "Welcome Dashboard",
        "pathname": "welcome-dashboard"
      },
      "conditions": [
        {
          "alias": "Umb.Condition.SectionAlias",
          "match": "example.ui.section"
        }
      ]
    },
    {
      "type": "dashboard",
      "alias": "example.ui.dashboard.dialogs",
      "name": "Dialogs",
      "js": "/App_Plugins/Example.UI/scripts/dashboards/custom-dialogs-dashboard.js",
      "weight": -1,
      "meta": {
        "label": "Dialogs",
        "pathname": "dialogs"
      },
      "conditions": [
        {
          "alias": "Umb.Condition.SectionAlias",
          "match": "example.ui.section"
        }
      ]
    },
    {
      "type": "sectionView",
      "alias": "example.ui.dashboard.section.boxlayout",
      "js": "/App_Plugins/Example.UI/scripts/sections/box-layout-section.js",
      "name": "Box Layout",
      "meta": {
        "sections": [ "example.ui.section" ],
        "label": "Box Layout",
        "icon": "folder",
        "pathname": "box-layout"
      },
      "conditions": [
        {
          "alias": "Umb.Condition.SectionAlias",
          "match": "example.ui.section"
        }
      ]
    }*/
]