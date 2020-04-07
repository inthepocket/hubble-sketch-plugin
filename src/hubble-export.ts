import { execSync } from '@skpm/child_process';
import { Contents } from '@sketch-hq/sketch-file-format-ts/dist/v3-types';

import sketchConfig from './utils/sketchConfig';
import { sketchAlert } from './utils/alerts';
import error from './utils/error';

/* Open Hubble.app's protocol URL */
function exportToHubbleApp(filePath: string) {
  const PROTOCOL_URL = `hubble://init?filePath=${filePath}&app=SKETCH`;

  try {
    sketchAlert(`✨ Opening Hubble.app`);
    execSync(`/usr/bin/open "${PROTOCOL_URL}"`);
    return sketchAlert('🔭 Hubble export successfull!');
  } catch (err) {
    error(err, '👽 An error occured while trying to export', true);
    throw err;
  }
}

export default function exportSketch(context: Contents) {
  const { document, filePath } = sketchConfig(context);

  if (!Array.isArray(document.pages)) {
    sketchAlert(
      'Something went really wrong...\n\nPlease check the debug logs or file an issue at https://github.com/inthepocket/hubble-sketch-plugin',
      false,
    );
    throw new Error('No pages found inside document');
  }

  if (!filePath) {
    return sketchAlert(
      'This file is not saved, please make sure you save the file before tying to export to Hubble.app',
    );
  }

  return document.save(err => {
    if (err) {
      error(
        err,
        '👽 Could not save the document. Please try saving the file manually.\n\nIf the problem persists file an issue at https://github.com/inthepocket/hubble-sketch-plugin',
        true,
      );
    } else {
      exportToHubbleApp(filePath);
    }
  });
}
