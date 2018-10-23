/* eslint-disable import/prefer-default-export */
import { execSync } from '@skpm/child_process';

export const uploadToGoogleCloud = (assetOutPutDir, bucketname = "sketchxport-plugin-output") =>
  execSync(`$(which gsutil) cp ${assetOutPutDir}/sketchxport-upload_bundle.zip gs://${bucketname}`);
