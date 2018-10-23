import {getPrimitivesPage, bundleArtboardsPerType} from '../utils/sketch';
import {convertHexToColorObject} from '../utils/mappers';
import { debug } from '../utils/debug';

export default function generateConfig(doc) {
    const primitivesPage = getPrimitivesPage(doc);

    const { colors, textStyles, others} = bundleArtboardsPerType(primitivesPage.layers);

    debug("do something with textStyles", textStyles);
    debug("do something with others", others);

    const result = {
      // textStyles: mapTextStyles(textStyles),
      colors: colors.map (color => ({
        ...color,
        ...convertHexToColorObject (color.hex),
      })),
      // fonts: response.meta.fonts,
      // sketchVersion: response.meta.appVersion,
    };

    // debug ('generatedConfig', result, '\n');

    // doc.pages.map (page =>

    //    ({
    //     layers: page.layers,
    //     name: page.name,
    //     sketchId: page.do_objectID,
    //   })
    // );
    return result;
}