import sketch from 'sketch';
import { Contents, Page } from '@sketch-hq/sketch-file-format-ts/dist/v3-types';

export default function getSketchConfig(context: Contents) {
  const sketchDocument = sketch.fromNative(context.document);

  return {
    get primitivesPage(): Page {
      return sketchDocument.pages.find(page => page.name?.toLowerCase() === 'primitives');
    },
    get projectId() {
      const { layers } = this.primitivesPage as Page;
      return layers.find(layer => layer.name.toLowerCase() === 'config/projectid');
    },
    document: sketchDocument,
    filePath: sketchDocument.path,
  };
}
