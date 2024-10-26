import {ManifestDashboard, ManifestModal, ManifestTypes} from "@umbraco-cms/backoffice/extension-registry";

const manifestDashboard: ManifestDashboard = {
    type: "dashboard",
    alias: "example.ui.dialogs.dashboard",
    name: "Dialogs",
    element: () => import("./dialogs-dashboard.ts"),
    weight: -1,
    meta: {
        label: "Dialogs",
        pathname: "dialogs"
    },
    conditions: [
        {
            "alias": "Umb.Condition.SectionAlias",
            "match": "example.ui.section"
        }
    ]
}

const manifestModal: ManifestModal = {
    type: "modal",
    name: "Dialog Modal",
    alias: "example.ui.dialogs.modal",
    element: () => import("./dialog-modal-element.ts"),
    weight: -1,
    meta: {
        label: "Dialog Modal"
    }
}

export const manifests: Array<ManifestTypes> = [manifestDashboard, manifestModal]

export default [manifests]