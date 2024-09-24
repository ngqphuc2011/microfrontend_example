import { mount } from "checkout/utils";
import { useEffect, useRef } from "react";
import CartVue from 'checkout/Cart'

export default function Cart () {
    const elementRef = useRef(null);

    useEffect(() => {
        let vueComponent: ReturnType<typeof mount>;
        if (elementRef.current) {
          vueComponent = mount(elementRef.current, CartVue);
        }
    
        return () => {
          vueComponent?.unmount;
        };
      }, []);


    return <div ref={elementRef}></div>
}