// documentation: https://developer.sketchapp.com/reference/api/
import { execSync } from '@skpm/child_process';

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

  const { doc, documentSetting, filePath } = sketchConfig(context);

  if (!filePath) {
    return sketchAlert('This file is not saved, please make sure you save the file before tying to export to Hubble.app');
  }

  if (!documentSetting) {
    return sketchAlert("🤔 Seems like this document isn't properly configured yet. Please configure the plugin first using Plugins > Hubble > Configure Hubble");
  }

  try {
    sketchAlert(`🙌 Aaight, we catch your drift and start exporting for project ${documentSetting}.`);

    if (!context) {
      throw new Error('Plugin did not receive context');
    }

    if (!doc && !doc.pages) {
      throw new Error('The document should contain pages...');
    }

    const PROTOCOL_URL = `hubble://init?filePath=${filePath}&project=`+`documentSetting`;
    execSync(`/usr/bin/open "${PROTOCOL_URL}"`);

    if (debugConfig.withSuccessSound) playSystemSound('Glass');

    endOfPlugin();
    return sketchAlert("Hubble export successfull!");
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
