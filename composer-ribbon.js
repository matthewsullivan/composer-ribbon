import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
        .ribbon-wrapper {
          border: 1px solid var(--ribbon-colour);
          height: var(--ribbon-height);
          width: auto;
        }
        .ribbon-image {
          width: var(--ribbon-height);
          height: 100%;
          background-color: var(--ribbon-colour);
          float: left;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .ribbon-container {
          height: var(--ribbon-height);
          width: calc(100% - var(--ribbon-height));
          float: left;
          font-size: calc(8px + 1vh);
          box-sizing: border-box;
          padding-left: 10px;
          padding-right: 10px;
          line-height: var(--ribbon-height);
          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
        }
        .ribbon-composer {
          float: left;
          display: inline-block;
        }
        .ribbon-social {
          display: inline-block;

          box-sizing: border-box;
          padding: 4px;
        }
        a,
        a:visited,
        a:hover,
        a:active {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          position: relative;
          transition: 0.5s color ease;
          text-decoration: none;
          color: var(--ribbon-colour);
        }
        a:hover {
          color: var(--ribbon-colour);
        }
        a.before:before,
        a.after:after {
          content: '';
          transition: 0.5s all ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          position: absolute;
        }
        a.before:before {
          top: -0.25em;
        }
        a.after:after {
          bottom: -0.25em;
        }
        a.before:before,
        a.after:after {
          height: 1px;
          width: 0;
          background: var(--ribbon-colour);
        }
        a.composer-title:after {
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
        }
        a.before:hover:before,
        a.after:hover:after {
          width: 100%;
        }
        .no-link {
          pointer-events: none;
          cursor: default;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        li {
          display: inline;
          margin-left: 4px;
        }
      </style>
      <div class="ribbon-wrapper">
        <div
          class="ribbon-image"
          style="background-image: url({{image}})"
        ></div>
        <div class="ribbon-container">
          <div class="ribbon-composer">
            <a
              href="{{url}}"
              id="ribbonUrl"
              class="composer-title after"
              target="_blank"
              >{{name}}</a
            >
          </div>
          <div class="ribbon-social">
            <ul>
              <template is="dom-repeat" items="{{social}}" as="social">
                <li>
                  <a
                    href="{{social.link}}"
                    class="composer-title after"
                    target="_blank"
                  >
                    <social-media-icons
                      icon="{{social.icon}}"
                      color="{{colour}}"
                      size="18"
                    ></social-media-icons>
                  </a>
                </li>
              </template>
            </ul>
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
      name: {
        type: String,
        value: 'Composer Name',
        notify: true,
        reflectToAttribute: true,
        observer: '_setComposerName',
      },
      url: {
        type: String,
        value: '#',
        notify: true,
        reflectToAttribute: true,
        observer: '_setComposerUrl',
      },
      image: {
        type: String,
        value: '../assets/img/default-icon.png',
        notify: true,
        reflectToAttribute: true,
        observer: '_setComposerImage',
      },
      social: {
        type: Array,
        value() {
          return [];
        },
        notify: true,
        reflectToAttribute: true,
        observer: '_setComposerSocial',
      },
      colour: {
        type: String,
        value: '#555555',
        notify: true,
        reflectToAttribute: true,
        observer: '_setComposerColour',
      },
      height: {
        type: String,
        value: '40px',
        notify: true,
        reflectToAttribute: true,
        observer: '_setComposerHeight',
      },
      _setComposerName: (name) => {
        return name;
      },
      _setComposerUrl: (url) => {
        return url;
      },
      _setComposerImage: (path) => {
        return path;
      },
      _setComposerSocial: (social) => {
        return social;
      },
      _setComposerColour: (colour) => {
        return colour;
      },
      _setComposerHeight: (height) => {
        return height;
      },
    };
  }
  ready() {
    super.ready();

    this.updateStyles({
      '--ribbon-colour': this.colour,
      '--ribbon-height': this.height,
    });

    if (this.url == '#') {
      const ribbonUrl = this.$.ribbonUrl;

      ribbonUrl.classList.add('no-link');
    }
  }
}
window.customElements.define(ComposerRibbon.is, ComposerRibbon);
