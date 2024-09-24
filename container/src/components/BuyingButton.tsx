import { useEffect, useRef } from "react";
import BuyingButtonVue from "checkout/BuyingButton";
import { mount } from "checkout/utils";

export default function BuyingButton(props: { price: number }) {
  const elementRef = useRef(null);
  const bc = useRef(new BroadcastChannel('demo_app'))

  useEffect(() => {
    let vueComponent: ReturnType<typeof mount>;
    if (elementRef.current) {
      vueComponent = mount(elementRef.current, BuyingButtonVue);
    }

    return () => {
      vueComponent?.unmount;
    };
  }, []);

  useEffect(() => {
    bc.current.postMessage({
      name: 'demoApp:update:selecteProduct',
      payload: props.price
    })
  }, [props.price])

  return <div ref={elementRef}></div>;
}
