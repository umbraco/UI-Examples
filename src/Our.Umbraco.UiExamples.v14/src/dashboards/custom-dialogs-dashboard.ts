import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('uie-custom-dialogs-dashboard')
export default class UieCustomDialogsDashboard extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
    docsHint = 'Click on the Vite and Lit logos to learn more'


  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

    render() {
      return html`
        <uui-modal-container>
          <uui-modal-dialog>
            <h1>My Modal</h1>
            <p>My modal content</p>
          </uui-modal-dialog>
        </uui-modal-container>
        `
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
