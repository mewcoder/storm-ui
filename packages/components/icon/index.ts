import _Icon from "./src/icon.vue";
import { withInstall } from "@strom-ui/utils/sfc";

export * from "./src/icon";

const Icon = withInstall(_Icon);

export default Icon;
console.log(Icon);

declare module "vue" {
  export interface GlobalComponents {
    STIcon: typeof Icon;
  }
}
