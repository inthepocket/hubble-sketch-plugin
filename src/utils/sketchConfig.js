import sketch from 'sketch';

export const sketchAlert = message => sketch.UI.message(message);

export default context => ({
  get doc() {
    return sketch.fromNative(context.document);
  },

  get primitivesPage() {
    return this.doc.pages.filter(page => page.name === 'primitives').find(Boolean);
  },

  get assetOutPutDir() {
    return '~/Desktop/sketchxport-output/svg';
  },
});