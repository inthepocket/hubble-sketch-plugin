import Settings from 'sketch/settings';

import sketchConfig, { sketchPrompt, sketchAlert } from './utils/sketchConfig';
import error from './utils/error';

export default function(context) {
  const { doc, documentSettingsKey, documentSetting } = sketchConfig(context);

  if (documentSetting) {
    return sketchAlert(
      `This document was already successfully set up with project id: ${documentSetting}`,
    );
  }

  const projectName = sketchPrompt("What's the project name:", 'my-cool-hubble-project');

  // The user cancelled the input
  if (projectName === 'null') return; // eslint-disable-line

  try {
    Settings.setDocumentSettingForKey(doc, documentSettingsKey, projectName);
  } catch (err) {
    error(err, 'Oh no, something went wrong when trying to set up Hubble for this document', true)
    throw err;
  }

  return sketchAlert(`🤚 High Five! You've set up Hubble for this Sketch document.`);
}
