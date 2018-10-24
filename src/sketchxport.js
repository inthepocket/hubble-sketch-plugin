// documentation: https://developer.sketchapp.com/reference/api/
import { startOfPlugin, endOfPlugin } from './utils/debug';
import generateConfig from './services/generateConfig';
import generateAssets from './services/generateAssets';
import playSystemSound from './utils/playSystemSound';
import sketchConfig, { sketchAlert } from './utils/sketchConfig';

const debugConfig = {
  debugEnabled: true,
  withSuccessSound: true,
  withFailureSound: true,
};

export default function(context) {
  startOfPlugin(true);

  const { doc, primitivesPage, assetOutPutDir } = sketchConfig(context);

  try {
    sketchAlert('Aaight, we catch your drift and start exporting. 🙌');
    if (!context) {
      throw new Error('Plugin should have context');
    }

    if (!doc && !doc.pages) {
      throw new Error('The doc should have pages..');
    }

    // const sharedStyle = doc.getSharedTextStyles();

    generateConfig(primitivesPage);
    generateAssets(primitivesPage, assetOutPutDir);

    if (debugConfig.withSuccessSound) playSystemSound('Glass');

    endOfPlugin();
  } catch (e) {
    console.error('😿 😿 😿 😿 😿 😿 😿 😿 😿\n', e, '\n😿 😿 😿 😿 😿 😿 😿 😿 😿');

    if (debugConfig.withFailureSound) playSystemSound('Basso');
    throw e;
  }
}
