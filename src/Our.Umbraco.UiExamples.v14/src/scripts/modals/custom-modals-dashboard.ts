import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { MY_DIALOG_TOKEN } from './custom-dialog.token';
import { MY_SIDEBAR_TOKEN } from './custom-sidebar.token';
import { UMB_MODAL_MANAGER_CONTEXT, UMB_CONTEXT_DEBUGGER_MODAL, UMB_CONFIRM_MODAL, UMB_CODE_EDITOR_MODAL } from '@umbraco-cms/backoffice/modal';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('uie-custom-modals-dashboard')
export default class UieCustomDialogsDashboard extends UmbElementMixin(LitElement) {
  #modalManagerContext?: typeof UMB_MODAL_MANAGER_CONTEXT.TYPE;

  constructor() {
    super();
    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
      this.#modalManagerContext = instance;
      // modalManagerContext is now ready to be used.
    });
  }


  @property({ attribute: false })
  message?: string;

  @property({ attribute: false })
  returnData?: string;

  render() {
    return html`
        <umb-code-block copy="true">Your last action was: <b>${this.message ?? "Nothing clicked yet..."}</b>
With data: ${this.returnData ?? "{}"}</umb-code-block>

        <uui-box style="margin-top:20px;">
            <div slot="header" class="header-bar">
                <div>
                    <h5 class="title">Modals<br/><span class="sub-header">Modals are the mechanism to display content on-top of the current display.</span></h5>
                </div>
            </div>
            <div slot="header-actions">
                <uui-button href="https://apidocs.umbraco.com/v14/ui/?path=/docs/uui_layout-modals-documentation--docs"  target="_blank" look="primary" color="positive">
                    <uui-icon name="info"></uui-icon>
                    View the Storybook library</uui-button>
                <uui-button href="https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-types/modals/confirm-dialog"  target="_blank" look="primary" color="positive">
                    <uui-icon name="info"></uui-icon>
                    View the dialog tutorial</uui-button>
            </div>
            <slot>
                <p>The term "Modal" covers both types of pop-overs; <b>Dialogs</b> and <b>Sidebars</b>. You can see examples below that define how you would open an Umbraco pre-built modal.</p>
                
                <p>Modals come in two parts; the element and the token.<br/>
                  The <b>token</b> is responsible for triggering the modal to be displayed using the <a href="https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-types/modals#basic-usage" target="_blank">ModalManagerContext</a><br/>
                  The <b>element</b> is the UI components and is responsible for showing the HTML on screen, along with any in-modal functionality
                </p>
                
                <p>You can see all of the prebuilt modals by checking the <a href="https://github.com/umbraco/Umbraco.CMS.Backoffice/tree/849368269126fa816aca394e8e41ef1703cfe0c2/src/packages/core/modal/token" target="_blank">GitHub Source</a></p>

                <uui-button look="primary" color="default" @click=${this._openConfirmationModal}>Confirm Dialog</uui-button>
                <uui-button look="primary" color="danger" @click=${this._openDebugDialog}>Debug Sidebar</uui-button>
                <uui-button look="secondary" color="danger" @click=${this._openCodeDialog}>Code Editor Sidebar</uui-button>

                <p></p>
                <p></code></p>

            </slot>
        </uui-box>
        <uui-box style="margin-top:20px;">
            <div slot="header" class="header-bar">
                <div>
                    <h5 class="title">Custom Modals</h5>
                </div>
            </div>
            <div slot="header-actions">
                <uui-button href="https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-types/modals/custom-modals"  target="_blank" look="primary" color="positive">
                    <uui-icon name="info"></uui-icon>
                    View the custom modal tutorial</uui-button>
            </div>
            <slot>
                <p>When you have specific requirements and the inbuilt modals don't suit your needs, you can create your own custom modal and put anything you want in there.</p>

                <uui-button look="primary" color="warning" @click=${this._openCustomSidebar}>Custom Sidebar</uui-button>
                <uui-button look="outline" color="positive" @click=${this._openCustomModal}>Custom Dialog</uui-button>
            </slot>
        </uui-box>`
  }

  private _handleSubmit(isPositive?: boolean, data?: string) {
    this.message = isPositive ? "Submitted" : "Cancelled";
    this.returnData = data;
  }

  private _openCodeDialog() {
    const ctx = this.#modalManagerContext?.open(this, UMB_CODE_EDITOR_MODAL, {
      data: {
        headline:"text",
        content:"Enter something and it will be sent back from the modal",
        language:"javascript"
      },
    });
    ctx?.onSubmit().then((e) => {
      this._handleSubmit(true, JSON.stringify(e));
    }).catch(() => {
      this._handleSubmit(false);
    })
  }
  private _openDebugDialog() {
    const ctx = this.#modalManagerContext?.open(this, UMB_CONTEXT_DEBUGGER_MODAL, {
      data: {
        content:"I am a debugger modal!"
      },
    });

    ctx?.onSubmit().then((e) => {
      this._handleSubmit(true, JSON.stringify(e));
    }).catch(() => {
      this._handleSubmit(false);
    })
  }

  private _openConfirmationModal() {
    const ctx = this.#modalManagerContext?.open(this, UMB_CONFIRM_MODAL, {
      data: {
        headline: "This is a confirmation modal",
        content: "Word up modal",
        cancelLabel: 'Cancel',
        confirmLabel: 'Confirm',
        color: 'positive' // You can change the colour of the submit button (but not cancel)!
      },
    });

    ctx?.onSubmit().then((e) => {
      this._handleSubmit(true, JSON.stringify(e));
    }).catch(() => {
      this._handleSubmit(false);
    })
  }

  private _openCustomModal() {
    const ctx = this.#modalManagerContext?.open(this, MY_DIALOG_TOKEN, {
      data: {
        headline: "My modal headline",
      }
    });

    ctx?.onSubmit().then((e) => {
      console.log("Submitted", e);
      this._handleSubmit(true, JSON.stringify(e));
    }).catch(() => {
      this._handleSubmit(false);
    })
  }
  private _openCustomSidebar() {
    const ctx = this.#modalManagerContext?.open(this, MY_SIDEBAR_TOKEN, {
      data: {
        headline: "My sidebar headline",
      }
    });

    ctx?.onSubmit().then((e) => {
      console.log("Submitted", e);
      this._handleSubmit(true, JSON.stringify(e));
    }).catch(() => {
      this._handleSubmit(false);
    })
  }

  static styles = css`
    :host {
      padding: var(--uui-size-layout-1);
      display:block;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }
    .header-bar {
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .title {
        font-size: 15px;
    color: #000;
    font-weight: 700;
    margin:0;
    }
    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }
    .sub-header {
        font-size: 13px;
        color: #515054;
        line-height: 1.6em;
        margin-top: 1px;
    }
    p:first-child {
        margin-top:0;
    }
    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'uie-custom-dialogs-dashboard': UieCustomDialogsDashboard
  }
}
