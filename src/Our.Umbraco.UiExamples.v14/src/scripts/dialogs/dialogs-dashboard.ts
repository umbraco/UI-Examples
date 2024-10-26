import {css, html} from "lit";
import {customElement} from "lit/decorators.js";
import {
    UMB_CONFIRM_MODAL,
    UMB_MODAL_MANAGER_CONTEXT,
    UmbConfirmModalArgs,
    UmbModalManagerContext
} from "@umbraco-cms/backoffice/modal";
import {UmbLitElement} from "@umbraco-cms/backoffice/lit-element";
import {DIALOG_MODAL_TOKEN, DialogsModalData} from "./dialogs-modal.ts";


@customElement('uie-dialogs-dashboard')
export default class DialogsDashboardDashboard extends UmbLitElement {

    #modalContext: UmbModalManagerContext | undefined;

    constructor() {
        super();
        this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (_instance: UmbModalManagerContext) => {
            this.#modalContext = _instance;
        });
    }

    render() {
        return html`
            <div class="container">
                <uui-box headline="Modal Dialogs">
                    <div class="container">
                        Umbraco comes with a built in confirm dialog that can be used via the ModalContext. The dialog's
                        submit button comes two colors, positive and danger.
                        <div>
                            <uui-button look="primary" color="primary" @click="${this.confirmDialog}">Confirm Positive
                            </uui-button>
                            <uui-button look="primary" color="danger" @click="${this.confirmDeleteDialog}">Confirm
                                Danger
                            </uui-button>
                        </div>
                    </div>
                </uui-box>

                <uui-box headline="Custom Dialogs">
                    <div class="container">
                        For more custom options you need to provide a custom element and a custom modal token to manage
                        what
                        happens inside the overlay.

                        With this method you can control the submit and close process so you can (with a little
                        fangling)
                        have muilt-step processes inside the overlay window.
                        <div>
                            <uui-button look="primary" @click="${this.openCustomDialog}">Custom Modal</uui-button>
                        </div>
                    </div>
                </uui-box>
            </div>
        `
    }

    confirmDialog() {
        let args: UmbConfirmModalArgs = {
            headline: "Positive",
            content: "Are you sure?",
            color: "positive",
            confirmLabel: "Confirm",
        };

        this.openDialog(args)
    }

    confirmDeleteDialog() {
        let args: UmbConfirmModalArgs = {
            headline: "Danger",
            content: "Are you sure?",
            color: "danger",
            confirmLabel: "Delete",
        };

        this.openDialog(args)
    }

    openDialog(args: UmbConfirmModalArgs) {
        let confirmContext = this.#modalContext?.open(this, UMB_CONFIRM_MODAL, {data: args})

        confirmContext?.onSubmit().then(() => {
            alert("Confirmed")
        }).catch(() => {
            alert("Cancelled")
        });
    }

    openCustomDialog() {
        let args: DialogsModalData = {
            headline: "Custom Dialog",
            content: "This is a custom dialog",
            icon: "icon-info",
            color: "positive",
        }

        let confirmContext = this.#modalContext?.open(this, DIALOG_MODAL_TOKEN, {data: args})

        confirmContext?.onSubmit().then((result) => {
            alert(result.myData)
        }).catch(() => {
            alert("Cancelled")
        });
    }


    static styles = css`
        :host {
            padding: var(--uui-size-layout-1);
            display: block;

            --border-size: 2px;
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-space-5);
        }
    `;

}