/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "product/Product" {
  type FunctionalComponent = import("react").FC;
  const Product: FunctionalComponent<{ onChange: (payload: any) => void }>;
  export default Product;
}

declare module "product/utils" {
  export const mount: (
    el: HTMLElement,
    component: FC,
    props: Attributes
  ) => { unmount: () => void };
}

declare module "checkout/BuyingButton" {}
declare module "checkout/Cart" {}
declare module "checkout/utils" {
  export const mount: (
    el: HTMLElement,
    component: unknown,
    props?: Record<string, string | number | boolean>
  ) => { unmount: () => void };
}
