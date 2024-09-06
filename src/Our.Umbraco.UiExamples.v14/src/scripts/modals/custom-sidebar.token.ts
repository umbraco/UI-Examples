import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export type MySidebarData = {
    headline: string;
}

export type MySidebarValue = {
    myData: string;
    myText: string;
}

export const MY_SIDEBAR_TOKEN = new UmbModalToken<MySidebarData, MySidebarValue>('My.Sidebar', {
    modal: {
        type: 'sidebar',
        size: 'large'
    }
});