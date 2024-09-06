import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestTypes> = [
  {
    "type": "dashboard",
    "alias": "example.ui.modals.dashboard",
    "name": "Modals",
    "element": () => import("./custom-modals-dashboard.ts"),
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
    "type": "modal",
    "alias": "example.ui.modals.dialog",
    "name": "My Dialog",
    "element": () => import("./custom-dialog.ts"),
  },
  {
    "type": "modal",
    "alias": "example.ui.modals.sidebar",
    "name": "My Sidebar Modal",
    "element": () => import("./custom-sidebar.ts"),
  }
]