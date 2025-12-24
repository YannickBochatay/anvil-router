let template = document.createElement("template");

template.innerHTML = `
<style>
  anvil-router {
    display:block;
  }
  anvil-router > * {
    display:none;
  }
  body:not(:has(:target)) anvil-router > *:first-child,
  anvil-router > *:target,
  anvil-router > *:has(:target),
  anvil-router > *:target anvil-router > *:first-child {
    display:block;
  }
</style>
<slot></slot>
`

class AnvilRouter extends HTMLElement {

  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("anvil-router", AnvilRouter);