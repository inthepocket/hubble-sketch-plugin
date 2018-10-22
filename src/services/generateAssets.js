import sketchDOM from 'sketch/dom';
import { sketchAlert } from '../utils/sketchConfig';
import playSound from '../utils/playSystemSound';

const exportAsPNG = (page, options) => {
  sketchDOM.export(page, {
    scales: '1, 2, 3',
    formats: 'png',
    output: '~/Desktop/sketchxport-output/png',
    overwriting: true,
    "save-for-web": true,
    ...options,
  });
}

const exportAsSVG = (page, options) => {
  sketchDOM.export(page, {
    formats: 'svg',
    output: '~/Desktop/sketchxport-output/svg',
    overwriting: true,
    compact: true,
    "include-namespaces": false,
    ...options,
  })
}

export default function generateAssets(doc) {
  exportAsPNG(doc);
  exportAsSVG(doc);

  sketchAlert('Assets exported to');
  return playSound('Glass');
}
