import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
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
        <uui-box headline="UI Examples" headline-variant="h1">
          <p>This package is developed and maintained by the Umbraco Package Team. Contributions are welcome: <a href="https://github.com/umbraco/UI-Examples" target="_blank">visit the GitHub repository</a>.</p>
            <p>It contains an overview of several backoffice elements and shows you how to use them. Each UI example is linked to from a tab in the section header.</p>
            <p>The package is also great reference material, if you see something within this section - that isn't covered on one of the tabs - you can go to your App_Plugins folder and check the source.</p>
            <p>Everything in this package is front-end only (except for a bit of code that automatically adds this section to all user groups).</p>
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

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
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
    'my-element': MyElement
  }
}
