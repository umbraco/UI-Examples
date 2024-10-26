import {html, LitElement, property, customElement} from "@umbraco-cms/backoffice/external/lit";
import {UmbElementMixin} from "@umbraco-cms/backoffice/element-api";
import type {UmbModalContext} from "@umbraco-cms/backoffice/modal";
import type {DialogsModalData, DialogsModalValue} from "./dialogs-modal.ts";
import {UmbModalExtensionElement} from "@umbraco-cms/backoffice/extension-registry";
import {UUIInputElement} from "@umbraco-cms/backoffice/external/uui"
import {state, query} from "lit/decorators.js";
import {css} from "lit";

@customElement('my-dialog')
export default class MyDialogElement
    extends UmbElementMixin(LitElement)
    implements UmbModalExtensionElement<DialogsModalData, DialogsModalValue> {

    @property({attribute: false})
    modalContext?: UmbModalContext<DialogsModalData, DialogsModalValue>;

    @property({attribute: false})
    data?: DialogsModalData;

    value: Array<string> = [];
    
    @state()
    page = 0;


    @query("#modal-input")
    inputEl?: UUIInputElement;
    
    private _handleCancel() {
        this.modalContext?.submit();
    }

    private _handleSubmit() {
        
        let data = "Page 1: " + this.value[0] + "\n" + "Page 2: " + this.value[1] + "\nPage 3: " + this.value[2];
        
        this.modalContext?.updateValue({myData: data});
        this.modalContext?.submit();
    }

    inputChange(e: Event) {
        if (!e.target)
            return;
        const targetEl = e.target;
        if (targetEl instanceof UUIInputElement) {
            this.value[this.page] = targetEl.value as string;
        }
    }

    render() {
        return html`
            <div class="spacing">
                <h1>${this.modalContext?.data.headline ?? "Default headline"}</h1>
                <h2>Page ${this.page + 1}</h2>
                <uui-input id="modal-input" label="input for ${this.page}" name="${this.page}" @input="${this.inputChange}"></uui-input>
                ${this.renderButtons()}
        `;
    }

    renderButtons() {
        if (this.page === 2) {
            return html`
                <div class="space-between">
                    <uui-button label="" look="primary" @click=${this._handleCancel}>Cancel</uui-button>
                    <uui-button label="" look="primary" @click=${this._handleSubmit}>Submit</uui-button>
                </div>
            `;
        }

        return html`
            <div class="space-between">
                <uui-button label="" look="primary" @click=${this._handleCancel}>Cancel</uui-button>
                <uui-button label="" look="primary" @click=${this._nextPage}>NextPage</uui-button>
            </div>
        `;
    }

    _nextPage() {
        this.page++;
        
        if(this.inputEl){
            this.inputEl.value = "";
        }
    }

    static styles = css`
        :host {
            padding: var(--uui-size-layout-1);
            display: block;

            --border-size: 2px;
            min-width: 400px;
        }

        .spacing {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-space-5);
        }

        .space-between {
            display: flex;
            justify-content: space-between;
        }
    `;
}