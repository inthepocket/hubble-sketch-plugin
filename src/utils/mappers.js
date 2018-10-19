import colorConvert from 'color-convert';
import colorNamer from 'color-namer';
import camelcase from 'camelcase';

export const convertHexToColorObject = hex => {
  const rgb = colorConvert.hex
    .rgb (hex)
    .reduce ((rgbObject, rgbColor, currentIndex) => {
      switch (currentIndex) {
        case 0:
          return {
            ...rgbObject,
            red: rgbColor,
          };
        case 1:
          return {
            ...rgbObject,
            green: rgbColor,
          };
        case 2:
          return {
            ...rgbObject,
            blue: rgbColor,
          };
        default:
          return rgbObject;
      }
    }, {});

  return {
    hex,
    rgb: Object.values (rgb),
    hsl: colorConvert.rgb.hsl (Object.values (rgb)),
    red: rgb.red,
    green: rgb.green,
    blue: rgb.blue,
    name: camelcase (colorNamer ([rgb.red, rgb.green, rgb.blue]).ntc[0].name),
  };
};

export const mapTextStyles = textStyles =>
  textStyles.objects.map (stl => {
    const attrs = stl.value.textStyle.encodedAttributes;

    return {
      id: stl.name,
      weight: null,
      size: attrs.MSAttributedStringFontAttribute.attributes.size,
      family: attrs.MSAttributedStringFontAttribute.attributes.name,
      borderBottom: attrs.underlineStyle || null,
    //   color: formatColor (attrs.MSAttributedStringColorAttribute),
      kerning: attrs.kerning || null,
    };
  });
