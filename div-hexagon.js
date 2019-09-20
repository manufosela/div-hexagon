import { LitElement, html, css } from 'lit-element';

/**
 * `div-hexagon`
 * DivHexagon
 *
 * @customElement div-hexagon
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

class DivHexagon extends LitElement {
  static get is() {
    return 'div-hexagon';
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
        display: block;
        /* hexagon */
        --gap: 2vmin;
        --radio: calc(100vmin / 4);
        --width: calc(var(--radio) * .866);
        --height: var(--radio);
        /* colors */
        --negroC: #444448;
        --blancoS: #e1e8ed;

        --main-color: var(--blancoS);
        --main-bg: var(--negroC);

        color: var(--main-color);
        background: var(--main-bg);
        width: var(--width); 
        height: var(--height);
        overflow: hidden;
        clip-path: url(#hexa-v);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        filter: drop-shadow(0 0 1px #ccc);
      }
      ::slotted(*) { padding: 2rem; }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define(DivHexagon.is, DivHexagon);
export { DivHexagon as default };