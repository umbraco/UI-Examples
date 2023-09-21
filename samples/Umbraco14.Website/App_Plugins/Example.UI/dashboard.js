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

  <uui-box>
    <h1>Welcome to my dashboard</h1>
    <p>Example of vanilla JS code</p>

    <uui-button label="Click me" id="clickMe" look="secondary"></uui-button>
  </uui-box>
`;

export default class MyDashboardElement extends UmbElementMixin(HTMLElement) {
	/** @type {import('@umbraco-cms/backoffice/notification').UmbNotificationContext} */
	#notificationContext;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.shadowRoot.getElementById('clickMe').addEventListener('click', this.onClick.bind(this));

		this.consumeContext(UMB_NOTIFICATION_CONTEXT_TOKEN, (instance) => {
			this.#notificationContext = instance;
		});
	}

	onClick = () => {
		this.#notificationContext?.peek('positive', { data: { headline: 'Hello' } });
	};
}

customElements.define('my-custom-dashboard', MyDashboardElement);