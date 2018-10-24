import { execSync } from '@skpm/child_process';

// Utility function to play a given system sound.
export default function playSystemSound(sound) {
  // The command line tool `afplay` does what we need - we just have to call it with the full path
  // of a system sound.
  return execSync(`/usr/bin/afplay /System/Library/Sounds/${sound}.aiff`);
}
