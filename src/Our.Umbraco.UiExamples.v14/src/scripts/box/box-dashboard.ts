import {LitElement, css, html} from 'lit'
import {customElement} from 'lit/decorators.js'


@customElement('uie-box-dashboard')
export default class UieBoxDashboard extends LitElement {

    render() {
        return html`
            <div class="container">
                ${this.renderIntroSection()}
                ${this.renderHeadlineSection()}
                ${this.renderHeaderSection()}
                ${this.renderHeaderActionsSection()}
            </div>
        `
    }

    renderIntroSection() {
        return html`
            <uui-box class="red-outline" .headline="test">
                <h3 slot="headline" class="blue-outline spacing headline">
                    this is a headline
                </h3>
                <div slot="header" class="header purple-outline spacing">
                    this is a header
                </div>
                <div class="header-actions pink-outline" slot="header-actions">
                    <uui-button href="https://uui.umbraco.com/?path=/docs/uui-box--docs" target="_blank" look="primary"
                                color="positive">
                        <uui-badge slot="extra" label="A11Y label">!</uui-badge>
                        <uui-icon name="info"></uui-icon>
                        View the Storybook library
                    </uui-button>
                </div>
                <slot>
                    <div class="green-outline spacing">
                        <umb-code-block language="HTML">${this.renderBoxCodeExample()}</umb-code-block>
                        <div>
                            <p>
                                The uui-box has largely replaces the umb-box element from previous versions of Umbraco.
                            </p>
                            <p>
                                The <span class="red">uui-box</span> element (outlined in red) is used as a wrapper for
                                boxes in Umbraco. It contains a <span class="blue">headline</span> (outlined in blue),
                                <span class="purple">header</span> (outlined in purple), <span class="pink">header-actions</span>
                                (outlined in pink) and <span class="green">content</span> slot (outlined in green) that
                                are described below in more detail.
                            </p>
                        </div>
                    </div>
                </slot>
            </uui-box>
        `
    }

    renderHeadlineSection() {
        return html`
            <uui-box>
                <h3 slot="headline">
                    The uui-box headline slot
                </h3>
                <slot>
                    <div>
                        <umb-code-block language="HTML">${this.renderHeadlineSlotCodeExample()}</umb-code-block>
                    </div>
                    <p>
                        The headline slot is optional and is used to display a title for the box.
                    </p>

                    <div>
                        <umb-code-block language="HTML">${this.renderHeadlineAttributeCodeExample()}</umb-code-block>
                    </div>
                    <p>
                        Alternatively, you can use the headline attribute to set the title of the box. And the headline-variant attribute to set the variant of the headline.
                    </p>
                </slot>
            </uui-box>
        `;
    }
    
    renderHeaderSection(){
        return html`
            <uui-box>
                
                <h3 slot="headline">
                    The uui-box header slot
                </h3>
                <slot>
                    <div>
                        <umb-code-block language="HTML">${this.renderHeaderSlotCodeExample()}</umb-code-block>
                        <p>
                            The header slot is optional and is used to display additional content in the header of the
                            box.
                        </p>
                    </div>
                </slot>
            </uui-box>
        `;
    }
    
    renderHeaderActionsSection(){
        return html`
        <uui-box>
            <h3 slot="headline">
                The uui-box header-actions slot
            </h3>
            <slot>
                <div>
                    <umb-code-block language="HTML">${this.renderHeaderActionsSlotCodeExample()}</umb-code-block>
                    <p>
                        The header-actions slot is optional and is used to display actions such as buttons and links in the header of the box. 
                    </p>
                </div>
            </slot>
        </uui-box>
        `;
    }

    renderBoxCodeExample() {
        return html`
&lt;uui-box&gt;
    &lt;h3 slot=&quot;headline&quot;&gt;
        this is a headline
    &lt;/h3&gt;
    &lt;div slot=&quot;header&quot;&gt;
        this is a header
    &lt;/div&gt;
    &lt;div slot=&quot;header-actions&quot;&gt;
        // header actions here
    &lt;/div&gt;
    &lt;slot&gt;
        // content here
    &lt;/slot&gt;
&lt;/uui-box&gt;
        `;
    }

    renderHeadlineSlotCodeExample() {
        return html`
&lt;h3 slot=&quot;headline&quot;&gt;
    This is a headline
&lt;/h3&gt;
        `
    }
    renderHeadlineAttributeCodeExample() {
        return html`
&lt;uui-box headline=&quot;This is a headline&quot; headline-variant=&quot;h3&quot;&gt;
&lt;/uui-box&gt;
        `
    }
    
    renderHeaderActionsSlotCodeExample() {
        return html`
&lt;div slot=&quot;header-actions&quot;&gt;
    // header actions here / buttons / links / etc
    &lt;uui-button href=&quot;https://umbraco.com/&quot; target=&quot;_blank&quot; look=&quot;primary&quot;color=&quot;positive&quot;&gt;
        &lt;uui-badge slot=&quot;extra&quot; label=&quot;A11Y label&quot;&gt;!&lt;/uui-badge&gt;
        &lt;uui-icon name=&quot;info&quot;&gt;&lt;/uui-icon&gt;
        I am a button link
    &lt;/uui-button&gt;
&lt;/div&gt;
        `
    }


    renderHeaderSlotCodeExample() {
        return html`
&lt;div slot=&quot;header&quot;&gt;
    This is a header
&lt;/div&gt;
        `
    }

    static styles = css`
        :host {
            padding: var(--uui-size-layout-1);
            display: block;

            --border-size: 2px;
        }

        :host * {
            box-sizing: border-box;
        }

        .header-actions {
            display: flex;
            padding: var(--uui-size-space-5);
            height: 100%;

        }

        .header-actions uui-button {
            height: min-content;
            align-self: center;
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-space-5);
        }

        .spacing {
            padding: var(--uui-size-space-5);
        }

        .headline {
            height: 100%;
            margin: 0;
        }

        .header {
            display: flex;
            align-items: center;
        }

        .red-outline {
            border: var(--border-size) solid red;
        }

        .blue-outline {
            border: var(--border-size) solid blue;
        }

        .green-outline {
            border: var(--border-size) solid green;
        }

        .purple-outline {
            border: var(--border-size) solid purple;
        }

        .pink-outline {
            border: var(--border-size) solid hotpink;
        }

        .red {
            color: red;
        }

        .blue {
            color: blue;
        }

        .green {
            color: green;
        }

        .purple {
            color: purple;
        }

        .pink {
            color: hotpink;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'UieBoxDashboard': UieBoxDashboard
    }
}
