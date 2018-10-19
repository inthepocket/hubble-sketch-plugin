import {getPrimitivesPage, getColorsFromArtboard} from '../utils/sketch';
import {convertHexToColorObject} from '../utils/mappers';
import {debug } from '../utils/debug';

export default function generateConfig(doc) {
    const primitivesPage = getPrimitivesPage(doc);

    // debug('textStyle', textStyle);

    const colorLayers = getColorsFromArtboard (primitivesPage.layers);
    // debug(colorLayers);

    const result = {
      // textStyles: mapTextStyles(response.document.layerTextStyles),
      colors: colorLayers.map (color => ({
        ...color,
        ...convertHexToColorObject (color.hex),
      })),
      // fonts: response.meta.fonts,
      // sketchVersion: response.meta.appVersion,
    };

    debug ('generatedConfig', result, '\n');

    // doc.pages.map (page =>

    //    ({
    //     layers: page.layers,
    //     name: page.name,
    //     sketchId: page.do_objectID,
    //   })
    // );
    return result;
}