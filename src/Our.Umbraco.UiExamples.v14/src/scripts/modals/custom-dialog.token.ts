import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export type MyModalData = {
    headline: string;
}

export type MyModalValue = {
    myData: string;
}

export const MY_DIALOG_TOKEN = new UmbModalToken<MyModalData, MyModalValue>('example.ui.modals.dialog', {
    modal: {
        type: 'dialog',
        size: 'small'
    }
});