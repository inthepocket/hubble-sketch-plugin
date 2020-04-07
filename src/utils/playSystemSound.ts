import { execSync } from '@skpm/child_process';

type MacOSSounds =
  | 'Basso'
  | 'Blow'
  | 'Bottle'
  | 'Frog'
  | 'Funk'
  | 'Glass'
  | 'Hero'
  | 'Morse'
  | 'Ping'
  | 'Pop'
  | 'Purr'
  | 'Sosumi'
  | 'Submarine'
  | 'Think';

/**
 * Utility function to play a given system sound.
 */
const playSystemSound = (sound: MacOSSounds) =>
  execSync(`/usr/bin/afplay /System/Library/Sounds/${sound}.aiff`);

export default playSystemSound;
