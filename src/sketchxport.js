// documentation: https://developer.sketchapp.com/reference/api/
import { startOfPlugin, endOfPlugin } from './utils/debug';
import generateConfig from './services/generateConfig';
import generateAssets from './services/generateAssets';
import playSystemSound from './utils/playSystemSound';
import sketchConfig, { sketchAlert } from './utils/sketchConfig';
import { uploadToGoogleCloud } from './services/uploadToCloud';

const debugConfig = {
  debugEnabled: true,
  enableExperimentalFeatures: false,
  withSuccessSound: true,
  withFailureSound: true,
}

export default function (context) {
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

    generateConfig(doc);
    generateAssets(primitivesPage, assetOutPutDir);

    if (debugConfig.enableExperimentalFeatures) {
      uploadToGoogleCloud(assetOutPutDir);
    }

    if (debugConfig.withSuccessSound) playSystemSound('Glass');

    endOfPlugin();

  } catch (e) {
    console.error (`
      😿 😿 😿 😿 😿 😿 😿 😿 😿
      ${e}
      😿 😿 😿 😿 😿 😿 😿 😿 😿
    `);

    if (debugConfig.withFailureSound) playSystemSound('Basso');
    throw e;
  }
}
