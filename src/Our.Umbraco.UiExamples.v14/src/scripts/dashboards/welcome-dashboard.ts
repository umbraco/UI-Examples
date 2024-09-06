import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('uie-welcome-dashboard')
export default class UieWelcomeDashboard extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
    docsHint = 'Click on the Vite and Lit logos to learn more'


  /**
   * The number of times the button has been clicked.
   */
  @state()
  count = 0

  render() {
      return html`
        <uui-box>
            <div slot="header" class="header-bar">
                <div>
                    <h5 class="title">UI Examples<br/><span class="sub-header">Using the new backoffice</span></h5>
                </div>
                <div>
                    <uui-button href="https://uui.umbraco.com/"  target="_blank" look="primary" color="positive">
                        <uui-badge slot="extra" label="A11Y label">!</uui-badge>
                        <uui-icon name="info"></uui-icon>
                        View the Storybook library</uui-button>
                </div>
            </div>
            <slot>
                <p>This package is developed and maintained by the Umbraco Package Team. Contributions are welcome: <a href="https://github.com/umbraco/UI-Examples" target="_blank">visit the GitHub repository</a>.</p>
                <p>It contains an overview of several backoffice elements and shows you how to use them. Each UI example is linked to from a tab in the section header.</p>
                <p>The package is also great reference material, if you see something within this section - that isn't covered on one of the tabs - you can go to your App_Plugins folder and check the source.</p>
                <p>Everything in this package is front-end only (except for a bit of code that automatically adds this section to all user groups).</p>
            </slot>
        </uui-box>
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
    'uie-welcome-dashboard': UieWelcomeDashboard
  }
}
