import sketch from 'sketch';

export const sketchAlert = message => sketch.UI.message(message);
export const sketchPrompt = (message, defaultValue) => sketch.UI.getStringFromUser(message, defaultValue);
export const sketchInput = (message, options) => sketch.UI.getSelectionFromUser(message, options);

export default context => ({
  get doc() {
    return sketch.fromNative(context.document);
  },

  get documentSetting() {
    const val = sketch.Settings.documentSettingForKey(this.doc, this.documentSettingsKey);
    return !val || val === 'null' ? false : val;
  },

  get filePath() {
    return this.doc.path;
  },

  documentSettingsKey: 'sketchxport-project-id',
});
