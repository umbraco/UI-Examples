import { html, LitElement, property, customElement } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import type { UmbModalContext } from "@umbraco-cms/backoffice/modal";
import type { MySidebarData, MySidebarValue } from "./custom-sidebar.token.ts";
import { UmbModalExtensionElement } from "@umbraco-cms/backoffice/extension-registry";
import { UmbPropertyValueChangeEvent } from "@umbraco-cms/backoffice/property-editor";

@customElement('my-sidebar')
export default class MySidebarElement
    extends UmbElementMixin(LitElement)
    implements UmbModalExtensionElement<MySidebarData, MySidebarValue> {

    @property({ attribute: false })
    modalContext?: UmbModalContext<MySidebarData, MySidebarValue>;

    @property({ attribute: false })
    data?: MySidebarData;
    
    private _handleCancel() {
        this.modalContext?.reject();
    }

    private _handleSubmit() {
        this.modalContext?.updateValue({ myData: "hello world", myText: this.textInput });
        this.modalContext?.submit();
    }

    @property({ type: String })
    public textInput = "";
    
    #onInput(e: InputEvent) {
        this.textInput = (e.target as HTMLInputElement).value;
        this.#dispatchChangeEvent();
      }
    
      #dispatchChangeEvent() {
        this.dispatchEvent(new UmbPropertyValueChangeEvent());
      }

    render() {
        return html`
            <umb-body-layout headline="${this.modalContext?.data.headline ?? "Default headline"}" headline-variant="h5">
                <uui-box headline="Data">
                    <p>Some content of this box, appended in the default slot.</p>
                    <p>The headline is currently rendered as a h5.</p>

                    <uui-input
                        id="suggestion-input"
                        class="element"
                        label="text input"
                        .value=${this.textInput || ""}
                        @input=${this.#onInput}
                    >
                    </uui-input>

                </uui-box>
                
                <div slot="actions">
                    <uui-button @click=${this._handleCancel}>Cancel</uui-button>
                    <uui-button @click=${this._handleSubmit} color="positive" look="primary">Submit</uui-button>
                </div>
            </umb-body-layout>
        `;
    }
}