import { execSync } from '@skpm/child_process';

import sketchConfig, { sketchAlert } from './utils/sketchConfig';
import error from './utils/error';

/**
 * Open Hubble.app's protocol URL and parameterise the project id and filepath.
 */
function exportToHubbleApp(filePath, documentSetting) {
  try {
    sketchAlert(`✨ Opening Hubble.app and exporting tokens for project ${documentSetting}`);

    // TODO: check if Hubble.app open already, then open URL again.
    const PROTOCOL_URL = `hubble://init?filePath=${filePath}&project=${documentSetting}`;
    execSync(`/usr/bin/open "${PROTOCOL_URL}"`);

    return sketchAlert("🔭 Hubble export successfull!");
  } catch (err) {
    error(err, '👽 An error occured while trying to export', true)
    throw err;
  }
}

export default function(context) {
  const { doc, documentSetting, filePath } = sketchConfig(context);

  if (!doc && !doc.pages) {
    sketchAlert('Something went really wrong...\n\nPlease check the debug logs or file an issue at https://github.com/inthepocket/hubble-sketch-plugin', false);
    throw new Error('The document should contain pages...');
  }

  if (!filePath) {
    return sketchAlert('This file is not saved, please make sure you save the file before tying to export to Hubble.app');
  }

  if (!documentSetting) {
    return sketchAlert("🤔 Seems like this document isn't properly configured yet. Please configure the plugin first using Plugins > Hubble > Configure Hubble");
  }

  return doc.save((err) => {
    if (err) {
      error(err, '👽 Could not save the document. Please try saving the file manually.\n\nIf the problem persists file an issue at https://github.com/inthepocket/hubble-sketch-plugin', true);
    } else {
      exportToHubbleApp(filePath, documentSetting);
    }
  });
}
