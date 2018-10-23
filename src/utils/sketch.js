import { debug } from './debug';

const PRIMITIVES_PAGE_NAME = 'primitives';
const TEXT_STYLE_ARTBOARD_NAME = 'textstyle';
const COLOR_ARTBOARD_NAME = 'primitives/color/';

/**
 * Get an array of all pages in the sketch file
 * @param {Object} document sketch2json output
 * @return {Array<{layers, name, sketchId}>}
 */
export const getPageArrays = document =>
  Object.values(document.pages).map(page => ({
    layers: page.layers,
    name: page.name,
    sketchId: page.do_objectID,
  }));

export const getPrimitivesPage = doc => {
  const primitivesPage = getPageArrays(doc).find(i => i.name === PRIMITIVES_PAGE_NAME);
  if (!primitivesPage) {
    throw new Error(`No pages with the name ${PRIMITIVES_PAGE_NAME} `);
  }
  return primitivesPage;
};
/**
 * Get the color id from a valid color artboard name
 * @param {string} artboardName
 * @return {string}
 */
export const getColorId = artboardName => {
  if (!artboardName.startsWith(COLOR_ARTBOARD_NAME)) {
    throw new Error(
      `
        Tried to find color id for ${artboardName} but it was not the correct format.
        When using color artboards, the artboard name needs to be of format: ${COLOR_ARTBOARD_NAME}<colorId>
  
        Examples:
          ${COLOR_ARTBOARD_NAME}primaryColor, ${COLOR_ARTBOARD_NAME}primaryColor200, ${COLOR_ARTBOARD_NAME}mainRed
      `,
    );
  }

  const id = artboardName.replace(COLOR_ARTBOARD_NAME, '');
  const hasVariant = RegExp(/[0-9]+$/).test(id);

  return {
    id: hasVariant ? id.replace('/', '') : id,
    ...(hasVariant ? { variant: parseInt(id.match(/[0-9]+$/)[0], 0) } : {}),
  };
};

const getColorsFromLayer = layer => {
  const hex = layer.layers
    .map(color => {
      const [colors] = color.style.fills.map(fill => fill && fill.color).filter(Boolean);
      return colors;
    })
    .find(Boolean);
  return {
    hex,
    ...getColorId(layer.name),
  };
};

const getTextStyleFromLayer = layer => {
  debug('layer', layer);

  return layer.layers.filter(({ type }) => type === 'Text');
};

export const bundleArtboardsPerType = layers =>
  layers.reduce(
    (artboardsPerType, layer) => {
      if (layer.name.startsWith(COLOR_ARTBOARD_NAME)) {
        artboardsPerType.colors.push(getColorsFromLayer(layer));
      } else if (layer.name.startsWith(TEXT_STYLE_ARTBOARD_NAME)) {
        artboardsPerType.textStyles.push(getTextStyleFromLayer(layer));
      } else {
        artboardsPerType.others.push(layer);
      }
      return artboardsPerType;
    },
    { colors: [], textStyles: [], others: [] },
  );
