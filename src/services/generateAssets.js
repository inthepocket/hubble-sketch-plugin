import sketchDOM from 'sketch/dom';
import { sketchAlert } from '../utils/sketchConfig';
import playSound from '../utils/playSystemSound';

const exportAsPNG = (page, outputDir, options) => {
  sketchDOM.export(page, {
    scales: '1, 2, 3',
    formats: 'png',
    output: outputDir,
    overwriting: true,
    "save-for-web": true,
    ...options,
  });
}

const exportAsSVG = (page, outputDir, options) => {
  sketchDOM.export(page, {
    formats: 'svg',
    output: outputDir,
    overwriting: true,
    compact: true,
    "include-namespaces": false,
    ...options,
  })
}

export default function generateAssets(doc, assetOutPutDir) {
  exportAsPNG(doc, assetOutPutDir);
  exportAsSVG(doc, assetOutPutDir);

  sketchAlert('Assets exported to');
  return playSound('Glass');
}
