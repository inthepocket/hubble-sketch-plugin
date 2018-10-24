import Settings from 'sketch/settings';

import sketchConfig, { sketchPrompt, sketchAlert } from './utils/sketchConfig';

export default function(context) {
  const { doc, documentSettingsKey, hasDocumentSetting } = sketchConfig(context);

  if (hasDocumentSetting) {
    return sketchAlert(
      `This document was already successfully set up with project id: ${hasDocumentSetting}`,
    );
  }

  const projectName = sketchPrompt("What's the project name:", 'my-cool-sketchxport-project');

  // The user cancelled the input
  if (projectName === 'null') return; // eslint-disable-line

  try {
    Settings.setDocumentSettingForKey(doc, documentSettingsKey, projectName);
  } catch (err) {
    console.error(err);
    return sketchAlert(
      `Oh no, something went wrong when trying to set up Sketchxport for this document: ${e}`,
    );
  }

  return sketchAlert(`🤚 High Five! You've set up Sketchxport for this Sketch document.`);
}
