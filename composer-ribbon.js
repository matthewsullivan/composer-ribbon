import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-image/iron-image';

/**
 * `composer-ribbon`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ComposerRibbon extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          --ribbon-height: 40px;
          --ribbon-colour: #555555;
        }

        .ribbon {
          border: 1px solid var(--ribbon-colour);
          height: var(--ribbon-height);
          width: auto;
        }

        .ribbon__image {
          background-color: var(--ribbon-colour);
          float: left;
          height: 100%;
          width: var(--ribbon-height);
        }

        .ribbon__container {
          box-sizing: border-box;
          float: left;
          font-size: calc(8px + 1vh);
          height: var(--ribbon-height);
          line-height: var(--ribbon-height);
          overflow-x: scroll;
          overflow-y: hidden;
          padding-left: 10px;
          padding-right: 10px;
          width: calc(100% - var(--ribbon-height));
          white-space: nowrap;
        }

        .ribbon__composer {
          display: inline-block;
          float: left;
        }

        .ribbon__social {
          box-sizing: border-box;
          display: inline-block;
          padding: 4px;
        }

        .ribbon__title {
          color: var(--ribbon-colour);
          position: relative;
          text-decoration: none;
        }

        .ribbon__title:after {
          backface-visibility: hidden;
          background: var(--ribbon-colour);
          bottom: -0.25em;
          content: '';
          height: 1px;
          width: 0;
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          transition: 0.5s all ease;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translateX(-50%);
        }

        .ribbon__title:hover:after {
          width: 100%;
        }

        .ribbon__title--disabled {
          cursor: default;
          pointer-events: none;
        }

        .ribbon__icons {
          display: inline;
          margin-left: 4px;
        }
      </style>

      <div class="ribbon">
        <iron-image
          class="ribbon__image"
          sizing="contain"
          src="{{image}}"
        ></iron-image>

        <div class="ribbon__container">
          <div class="ribbon__composer">
            <a
              class="ribbon__title"
              href="{{url}}"
              id="ribbonUrl"
              target="_blank"
              >{{name}}</a
            >
          </div>

          <div class="ribbon__social">
            <template
              as="social"
              class="ribbon__icons"
              items="{{social}}"
              is="dom-repeat"
            >
              <a class="ribbon__title" href="{{social.link}}" target="_blank">
                <!-- <social-media-icons
                  color="{{colour}}"
                  icon="{{social.icon}}"
                  size="18"
                ></social-media-icons> -->
              </a>
            </template>
          </div>
        </div>
      </div>
    `;
  }

  static get is() {
    return 'composer-ribbon';
  }

  static get properties() {
    return {
      colour: {
        type: String,
        value: '#555',
      },
      height: {
        type: String,
        value: '40px',
      },
      image: {
        type: String,
        value: '../assets/img/default-icon.png',
      },
      name: {
        type: String,
        value: 'Composer Name',
      },
      social: {
        type: Array,
        value: () => {
          return [];
        },
      },
      url: {
        type: String,
        value: '#',
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this._setRibbonUrl();

    this.updateStyles({
      '--ribbon-colour': this.colour,
      '--ribbon-height': this.height,
    });
  }

  /*
   * Set ribbon url
   */
  _setRibbonUrl() {
    if (this.url !== '#') {
      return;
    }

    this.$.ribbonUrl.classList.add('ribbon__title--disabled');
  }
}
window.customElements.define(ComposerRibbon.is, ComposerRibbon);
