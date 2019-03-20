import sketch from 'sketch';

export const sketchAlert = (message, disappear = true) => disappear ? sketch.UI.message(message) : sketch.UI.alert('🔭 Hubble', message);
export const sketchPrompt = (message, defaultValue) => sketch.UI.getStringFromUser(message, defaultValue);
export const sketchInput = (message, options) => sketch.UI.getSelectionFromUser(message, options);

export default context => ({
  /**
   * Return the Document object.
   */
  get doc() {
    return sketch.fromNative(context.document);
  },

  /**
   * Return the document setting (project id) stored in this file.
   * If a named artboard 'config/projectid' is configured we will use that instead.
   */
  get documentSetting() {
    const fromDocument = sketch.Settings.documentSettingForKey(this.doc, this.documentSettingsKey);
    const fromArtboard = this.primitivesPage && this.primitivesPage.layers.find(layer => layer.name.toLowerCase() === 'config/projectid');

    if (fromArtboard) {
      return fromArtboard.layers[0].text;
    }

    return !fromDocument || fromDocument === 'null' ? false : fromDocument;
  },

  /**
   * Return the absolute path to where this file is stored on disk.
   */
  get filePath() {
    return this.doc.path;
  },

  /**
   * Return the primitives page if it exists
   */
  get primitivesPage() {
    return this.doc.pages.find(i => (i.name && i.name.toLowerCase() === 'primitives'));
  },

  /**
   * Identifier for storing the document setting (project id) in this file.
   */
  documentSettingsKey: 'hubble-project-id',
});
