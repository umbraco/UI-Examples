export const manifests: Array<UmbExtensionManifest> = [
    {
        "type": "dashboard",
        "alias": "example.ui.box.dashboard",
        "name": "Box",
        "element": () => import("./box-dashboard.ts"),
        "weight": -1,
        "meta": {
            "label": "Box",
            "pathname": "box"
        },
        "conditions": [
            {
                "alias": "Umb.Condition.SectionAlias",
                "match": "example.ui.section"
            }
        ]
    }
]