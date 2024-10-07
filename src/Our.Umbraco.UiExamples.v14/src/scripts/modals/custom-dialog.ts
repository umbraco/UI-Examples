import { html, LitElement, property, customElement } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import type { UmbModalContext } from "@umbraco-cms/backoffice/modal";
import type { MyModalData, MyModalValue } from "./custom-dialog.token.ts";
import { UmbModalExtensionElement } from "@umbraco-cms/backoffice/extension-registry";

@customElement('custom-dialog')
export default class MyDialogElement
    extends UmbElementMixin(LitElement)
    implements UmbModalExtensionElement<MyModalData, MyModalValue> {

    @property({ attribute: false })
    modalContext?: UmbModalContext<MyModalData, MyModalValue>;

    @property({ attribute: false })
    data?: MyModalData;

    private _handleCancel() {
        this.modalContext?.reject();
    }

    private _handleSubmit() {
        this.modalContext?.updateValue({ myData: "hello world" });
        this.modalContext?.submit();
    }

    render() {
        return html`
            <uui-dialog>
                <uui-dialog-layout>
                    <span slot="headline">
                    <uui-icon name="code"></uui-icon> ${this.modalContext?.data.headline ?? "Default headline"}
                    </span>
                    <p>This is using a <b>slot</b> for the headline.</p>
                    <uui-button slot="actions"  @click=${this._handleCancel}>Cancel</uui-button>
                    <uui-button slot="actions" look="primary" color="positive" @click=${this._handleSubmit}>Submit</uui-button>
                </uui-dialog-layout>
            </uui-dialog>
        `;
    }
}