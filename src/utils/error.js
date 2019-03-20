/* eslint-disable no-console */
import playSystemSound from './playSystemSound';
import { sketchAlert } from './sketchConfig';

/**
 * Log an error, show it in Sketch and play the macOS failure sound.
 */
export default (error, msg, persist) => {
  playSystemSound('Basso');
  sketchAlert(`${msg}: ${error}`, persist);
  console.error('An error occured while trying to export', error);
}
