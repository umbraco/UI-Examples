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
    "alias": "example.ui.dashboard.modals",
    "name": "Modals",
		"element": () => import("./scripts/dashboards/custom-modals-dashboard.ts"),
    "weight": -1,
    "meta": {
      "label": "Modals",
      "pathname": "modals"
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
  },
  {
    "type": "modal",
    "alias": "My.Dialog",
    "name": "My Dialog",
    "element":  () => import("./scripts/modals/custom-dialog.ts"),
  },
  {
    "type": "modal",
    "alias": "My.Sidebar",
    "name": "My Sidebar Modal",
    "element":  () => import("./scripts/modals/custom-sidebar.ts"),
  }
]