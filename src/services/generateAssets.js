import {toArray} from 'sketch-utils';

function findExports (context) {
    // find all exported SVGs
    const exportRequests = toArray (context.actionContext.exports);
    const svgPaths = exportRequests
      // .filter(currentExport => currentExport.request.format() == 'svg')
      .map (currentExport => String (currentExport.path));
  
    debug ('---paths', svgPaths, '\n');
  }
  

export default function generateAssets(context) {
    //findExports();
}