import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export type MyModalData = {
    headline: string;
}

export type MyModalValue = {
    myData: string;
}

export const MY_MODAL_TOKEN = new UmbModalToken<MyModalData, MyModalValue>('My.Modal', {
    modal: {
        type: 'sidebar',
        size: 'small'
    }
});