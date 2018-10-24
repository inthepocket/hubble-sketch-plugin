import Settings from 'sketch/settings';

import sketchConfig, { sketchInput, sketchAlert } from './utils/sketchConfig';

export default function(context) {
  // eslint-disable-next-line
  const [_, no, shouldContinue] = sketchInput(
    'This will erase any configuration linked to the document. Are you sure you want to proceed?',
    ['Yes', 'No'],
  );

  if (shouldContinue) {
    if (no === 1) return;

    const { doc, documentSettingsKey } = sketchConfig(context);
    try {
      Settings.setDocumentSettingForKey(doc, documentSettingsKey, null);
    } catch (err) {
      console.error(err);
      sketchAlert(`😿 Configuration for this document could not be cleared: ${err}`);
    }
  }

  sketchAlert('⚡️ Settings for this document were cleared.');
}
