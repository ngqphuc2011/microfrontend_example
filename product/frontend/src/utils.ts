import { Attributes, FC, createElement } from "react";
import ReactDOM from "react-dom/client";

export const mount = (
  el: HTMLElement,
  component: FC,
  props: Attributes = {}
) => {
  if (el) {
    const root = () => createElement(component, props)
    return ReactDOM.createRoot(el).render(root());
  }

  return null
};
