type shadowState = {
  stateName: string;
  state: string;
};

type typeRDOM = {
  create: Function;
  setShadowState: Function;
  getShadowState: Function;
  patch: Function;
};

export const RDOM: typeRDOM = {
  create(
    tagName: string,
    attrs: {
      [key: string]: string;
    },
    children: Node[]
  ): Node {
    const dom: Element = document.createElement(tagName);
    const attrs_keys: string[] = Object.keys(attrs);

    for (let i: number = 0; i < attrs_keys.length; i++) {
      const key: string = attrs_keys[i];
      dom.setAttribute(key, attrs[key]);
    }

    for (let i: number = 0; i < children.length; i++) {
      dom.appendChild(children[i]);
    }

    return dom;
  },

  setShadowState(element: Element, state: shadowState[]) {
    for (let i: number = 1; i < state.length; i++) {
      const _state = state[i];
      element.setAttribute('_shadow_' + _state.stateName, _state.state);
    }

    return element;
  },
  getShadowState(element: Element, stateName: string) {
    return element.getAttribute('_shadow_' + stateName);
  },
  patch(element: Element, DOM: Node) {
    return element.appendChild(DOM);
  },
};
