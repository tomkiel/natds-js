import * as MaterialSkeleton from "@material-ui/lab/Skeleton";

export type ISkeletonProps = Pick<
  MaterialSkeleton.SkeletonProps,
  "animation" |
  "children" |
  "height" |
  "variant" |
  "width"
>;
