/* eslint-disable no-console */
import playSystemSound from './playSystemSound';
import { sketchAlert } from './alerts';

/**
 * Log an error, show it in Sketch and play the macOS failure sound.
 */
export default function error(err: Error, msg: string, persist: boolean) {
  playSystemSound('Basso');
  sketchAlert(`${msg}: ${err}`, persist);
  console.error('An error occured while trying to export', err);
}
