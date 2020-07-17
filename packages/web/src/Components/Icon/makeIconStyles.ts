import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import {getFontSize} from "./getFontSize";
import {IIconSizes, ITheme} from "@naturacosmeticos/natds-styles";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeIconStyles = ({size}: {size?: keyof IIconSizes}) => makeStyles((theme: ITheme) => createStyles({
  "root": {
    "fontSize": getFontSize({size,
      theme})
  }
}));
