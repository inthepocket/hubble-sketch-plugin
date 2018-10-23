// documentation: https://developer.sketchapp.com/reference/api/
/* eslint-disable-next-line import/no-unresolved */
import sketch from 'sketch';

import {startOfPlugin, endOfPlugin } from './utils/debug';
import generateConfig from './services/generateConfig';
import generateAssets from './services/generateAssets';
import playSystemSound from './utils/playSystemSound';

const debugConfig = {
  debugEnabled: true,
  withSuccessSound: true,
  withFailureSound: true
}

export default function (context) {
  startOfPlugin(true);

  try {
    sketch.UI.message ('Aaight, we catch your drift and start exporting. 🙌');
    if (!context) {
      throw new Error ('Plugin should have context');
    }

    const doc = sketch.fromNative (context.document);

    if (!doc && !doc.pages) {

      throw new Error ('The doc should have pages..');
    }

    // const sharedStyle = doc.getSharedTextStyles();

    generateConfig(doc);
    generateAssets(context);

    if (debugConfig.withSuccessSound) playSystemSound ('Glass');

    endOfPlugin();
  } catch (e) {
    console.error (
      '😿 😿 😿 😿 😿 😿 😿 😿 😿\n',
      e,
      '\n😿 😿 😿 😿 😿 😿 😿 😿 😿'
    );
    if (debugConfig.withFailureSound) playSystemSound ('Basso');
    endOfPlugin();
    throw e;
  }
}
