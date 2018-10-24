import { bundleArtboardsPerType } from '../utils/sketch';
import { convertHexToColorObject } from '../utils/mappers';

export default function generateConfig(primitivesPage) {
  const { colors } = bundleArtboardsPerType(primitivesPage.layers);

  const result = {
    // textStyles,
    colors: colors.map(color => ({
      ...color,
      ...convertHexToColorObject(color.hex),
    })),
    // fonts:
    // sketchVersion: response.meta.appVersion,
  };

  return result;
}
