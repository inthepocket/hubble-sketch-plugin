import sketchConfig, { sketchAlert } from './utils/sketchConfig';

/**
 * Function to check if the artboard contains valid settings and artboard formatted layers.
 */
export default function(context) {
  const { filePath, documentSetting, primitivesPage } = sketchConfig(context);

  if (!filePath) return sketchAlert(`This file is not saved`, false);
  if (!primitivesPage) return sketchAlert('This file does not have a primitives page', false);
  if (!documentSetting) return sketchAlert(`This file contains no project id.`, false);

  if (!primitivesPage.layers.find(i => i.type === 'Artboard')) {
    return sketchAlert('Your primitives page does not contain any artboards yet.', false)
  }

  const validArtboards = primitivesPage.layers.filter(i => {
    const artboardName = i.name.toLowerCase();
    return artboardName.startsWith('primitives/color/') ||
      artboardName.startsWith('primitives/gradient/') ||
      artboardName.startsWith('primitives/shadow/') ||
      artboardName.startsWith('primitives/border/')
  });

  if (validArtboards.length <= 0) {
    return sketchAlert('The file is valid but you may not have created valid artboards in their correct format to be exported.')
  }

  if (primitivesPage.layers.length > validArtboards.length) {
    return sketchAlert(`The file is valid but your primitives page contains some artboards which have not been formatted correctly. \n${validArtboards.length} out of ${primitivesPage.layers.length} artboards are valid.`);
  }

  return sketchAlert('This file seems valid and is ready to be exported!');
}
