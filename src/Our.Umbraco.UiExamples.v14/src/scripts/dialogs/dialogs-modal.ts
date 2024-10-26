import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export type DialogsModalData = {
    headline: string;
    content: string;
    icon: string,
    color: "positive" | "danger";
}

export type DialogsModalValue = {
    myData: string;
}

export const DIALOG_MODAL_TOKEN = new UmbModalToken<DialogsModalData, DialogsModalValue>('example.ui.dialogs.modal', {
    modal: {
        type: 'dialog',
        size: 'small'
    }
});