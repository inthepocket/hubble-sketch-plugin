import { Contents } from '@sketch-hq/sketch-file-format-ts/dist/v3-types';

import sketchConfig from './utils/sketchConfig';
import { sketchAlert } from './utils/alerts';
import { Tokens } from './types';

/**
 * Function to check if the artboard contains valid settings and artboard formatted layers.
 */
export default function validateDocument(context: Contents) {
  const { filePath, primitivesPage } = sketchConfig(context);

  if (!filePath) return sketchAlert(`This file is not saved`, false);
  if (!primitivesPage) return sketchAlert('This file does not have a primitives page', false);

  // @ts-ignore
  if (!primitivesPage.layers.find(i => i.type === 'Artboard')) {
    return sketchAlert('Your primitives page does not contain any artboards yet.', false);
  }

  const { layers: artboards } = primitivesPage;

  const hasInvalidArtboardFormattings = artboards.find(
    artboard => !artboard.name.startsWith('primitives/') && !artboard.name.startsWith('config/'),
  );

  if (hasInvalidArtboardFormattings) {
    return sketchAlert(
      'Your primitives page should only contain artboards starting with primitives/...',
    );
  }

  const tokens = Object.values(Tokens)
    .map(token => {
      const amountOfTokens = artboards.filter(artboard =>
        artboard.name.toLowerCase().startsWith(`primitives/${token}`),
      ).length;
      return `${amountOfTokens} ${token}s`;
    })
    .join(', ');

  return sketchAlert(`This file seems valid and is ready to be exported! There are ${tokens}`);
}
