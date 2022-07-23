import { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
