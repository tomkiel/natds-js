// eslint-disable-next-line no-use-before-define
import * as React from "react";
import useTheme from "@material-ui/core/styles/useTheme";
import clsx from "clsx";
import ProductEmpty from "./images/product-empty.png";
import { ImageProps } from "./Image.props";
import { useStyles } from "./Image.styles";
import { IThemeWeb } from "../../Themes";
import { getSizeStyleProp } from "../../hooks/useSizeStyleProp";

export { ImageProps } from "./Image.props";

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  // eslint-disable-next-line complexity, max-statements
  (props: ImageProps, ref) => {
    const {
      alt, className, draggable, disableSelection, fallback, height, maxHeight, maxWidth, radius, state, style, src, width, ...otherProps
    } = props;

    const classes = useStyles({
      alt, disableSelection, height, maxHeight, maxWidth, radius, state, src, width,
    });

    const theme : IThemeWeb = useTheme();

    const heightAttribute = getSizeStyleProp({
      theme,
      value: height,
    });
    const widthAttribute = getSizeStyleProp({
      theme,
      value: width,
    });

    const [imageSrc, setImageSrc] = React.useState({ src, error: false });

    const fallbackSrc = fallback === "product" ? ProductEmpty : fallback;

    const onError = () => {
      if (!imageSrc.error) {
        setImageSrc({ src: fallbackSrc, error: true });

        return null;
      }

      return null;
    };

    const heightAttr = heightAttribute === "auto" ? "" : heightAttribute;
    const widhtAttr = widthAttribute === "auto" ? "" : widthAttribute;

    if (state) {
      return (
        <div className={classes.container}>
          <img
            alt={alt}
            className={clsx(classes.root, className)}
            draggable={draggable}
            height={heightAttr}
            onError={onError}
            ref={ref}
            src={imageSrc.src}
            style={style}
            width={widhtAttr}
            {...otherProps}
          />
          <div className={classes.overlay}></div>
        </div>
      );
    }

    return (
      <img
        alt={alt}
        className={clsx(classes.root, className)}
        draggable={draggable}
        height={heightAttr}
        onError={onError}
        ref={ref}
        src={imageSrc.src}
        style={style}
        width={widhtAttr}
        {...otherProps}
      />
    );
  },
);

Image.displayName = "Image";

export default Image;
