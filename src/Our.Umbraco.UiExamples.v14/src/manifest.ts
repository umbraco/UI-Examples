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
    "type": "bundle",
    "alias": "example.ui.modals",
    "name": "Example.UI - Modals",
    "js": () => import("./scripts/modals/manifest.ts")
  },
  {
    "type": "bundle",
    "alias": "example.ui.box",
    "name": "Example.UI - box",
    "js": () => import("./scripts/box/manifest.ts")
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
]