// documentation: https://developer.sketchapp.com/reference/api/
import { startOfPlugin, endOfPlugin } from './utils/debug';
import playSystemSound from './utils/playSystemSound';
import sketchConfig, { sketchAlert } from './utils/sketchConfig';

const debugConfig = {
  debugEnabled: true,
  withSuccessSound: true,
  withFailureSound: true,
};

export default function(context) {
  startOfPlugin(true);

  const { doc } = sketchConfig(context);

  try {
    sketchAlert('🙌 Aaight, we catch your drift and start exporting.');

    if (!context) {
      throw new Error('Plugin did not receive context');
    }

    if (!doc && !doc.pages) {
      throw new Error('The document should contain pages...');
    }

    // TODO: redirect to Electron application here with document settings + filepath provided

    if (debugConfig.withSuccessSound) playSystemSound('Glass');

    endOfPlugin();
  } catch (e) {
    sketchAlert(`😿 An error occured while trying to export: ${e}`);
    console.error(`
      😿 😿 😿 😿 😿 😿 😿 😿 😿
      ${e}
      😿 😿 😿 😿 😿 😿 😿 😿 😿
    `);

    if (debugConfig.withFailureSound) playSystemSound('Basso');
    throw e;
  }
}
