import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { UMB_NOTIFICATION_CONTEXT_TOKEN } from '@umbraco-cms/backoffice/notification';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      padding: 20px;
      display: block;
      box-sizing: border-box;
    }
  </style>

  <div>

    <uui-box id="group-umb-box" class="uiexamples-umbbox-outline">
        <umb-box-header title-key="umbbox_boxTitle" class="header">
            <umb-button action="vm.linkAway('https://our.umbraco.com/apidocs/v8/ui/#/api/umbraco.directives.directive:umbBox');"
                        label="umb-box"
                        type="button"
                        icon="icon-book"
                        button-style="info">
            </umb-button>
        </umb-box-header>

        <umb-box-content class="content">
            <umb-code-snippet language="'html'">
&lt;umb-box&gt;
    &lt;umb-box-header title="this is a title"&gt;&lt;/umb-box-header&gt;
    &lt;umb-box-content&gt;
        // Content here
    &lt;/umb-box-content&gt;
&lt;/umb-box&gt;
            </umb-code-snippet>

            <localize key="umbbox_boxDescription"></localize>
        </umb-box-content>
    </uui-box>

    <uui-box id="group-umb-box-header">
        <umb-box-header title-key="umbbox_headerTitle">
            <umb-button action="vm.linkAway('https://our.umbraco.com/apidocs/v8/ui/#/api/umbraco.directives.directive:umbBoxHeader');"
                        label="umb-box-header"
                        type="button"
                        icon="icon-book"
                        button-style="info">
            </umb-button>
        </umb-box-header>

        <umb-box-content>
            <umb-code-snippet language="'html'">
&lt;umb-box-header
    [title="{string}"]
    [title-key="{string}"]
    [description="{string}"]
    [description-key="{string}"]&gt;
&lt;/umb-box-header&gt;
            </umb-code-snippet>

            <localize key="umbbox_headerDescription"></localize>

            <umb-code-snippet language="'html'">
&lt;umb-box-header title-key="umbbox_headerTitle"&gt;
    &lt;umb-button action="vm.linkAway('https://our.umbraco.com/apidocs/v8/ui/#/api/umbraco.directives.directive:umbBoxHeader');"
                label-key="example_apiDocumentation"
                type="button"
                button-style="info"&gt;
    &lt;/umb-button&gt;
&lt;/umb-box-header&gt;
            </umb-code-snippet>

            <localize key="umbbox_headerButtonNote"></localize>
        </umb-box-content>
    </uui-box>

    <uui-box id="group-umb-box-content">
        <umb-box-header title-key="umbbox_contentTitle">
            <umb-button action="vm.linkAway('https://our.umbraco.com/apidocs/v8/ui/#/api/umbraco.directives.directive:umbBoxContent');"
                        label="umb-box-content"
                        type="button"
                        icon="icon-book"
                        button-style="info">
            </umb-button>
        </umb-box-header>

        <umb-box-content>
            <umb-code-snippet language="'html'">
&lt;umb-box-content&gt;
&lt;/umb-box-content&gt;
            </umb-code-snippet>

            <localize key="umbbox_contentDescription"></localize>
        </umb-box-content>
    </uui-box>

</div>
`;

export default class umbBoxDashboard extends UmbElementMixin(HTMLElement) {
	/** @type {import('@umbraco-cms/backoffice/notification').UmbNotificationContext} */
	#notificationContext;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.consumeContext(UMB_NOTIFICATION_CONTEXT_TOKEN, (instance) => {
			this.#notificationContext = instance;
		});
	}

	onClick = () => {
		this.#notificationContext?.peek('positive', { data: { headline: 'Hello' } });
	};
}

customElements.define('umb-box-dashboard', umbBoxDashboard);