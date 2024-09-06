import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { MY_MODAL_TOKEN } from '../dialogs/custom-modal.token';
import { UMB_MODAL_MANAGER_CONTEXT } from '@umbraco-cms/backoffice/modal';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('uie-custom-dialogs-dashboard')
export default class UieCustomDialogsDashboard extends UmbElementMixin(LitElement) {
  #modalManagerContext?: typeof UMB_MODAL_MANAGER_CONTEXT.TYPE;

  constructor() {
    super();
    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
      this.#modalManagerContext = instance;
      // modalManagerContext is now ready to be used.
    });
  }

  render() {
    return html`
        <uui-box>
            <div slot="header" class="header-bar">
                <div>
                    <h5 class="title">Overlay Dialogs<br/><span class="sub-header">Overlays give you a 'modal' dialog across the whole screen</span></h5>
                </div>
            </div>
            <div slot="header-actions">
                <uui-button href="https://uui.umbraco.com/"  target="_blank" look="primary" color="positive">
                    <uui-badge slot="extra" label="A11Y label">!</uui-badge>
                    <uui-icon name="info"></uui-icon>
                    View the Storybook library</uui-button>
            </div>
            <slot>
                <p>The overlay service has a confirm option built, in with this you can quickly create a confirm dialog, to present your users with a simple option.</p>
                <uui-button-group>
                  <uui-button look="primary" color="default" @click=${this._openModal}>Confirm</uui-button>
                  <uui-button look="primary" color="positive">Confirm Remove</uui-button>
                  <uui-button look="primary" color="danger">Confirm Delete</uui-button>
                </uui-button-group>
            </slot>
        </uui-box>`
  }

  private _openModal() {
    this.#modalManagerContext?.open(this, MY_MODAL_TOKEN, {
      data: {
        headline: "My modal headline",
      },
    });
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
