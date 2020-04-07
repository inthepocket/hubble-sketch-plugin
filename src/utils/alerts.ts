import sketch from 'sketch';

export const sketchAlert = (message: string, disappear = true) =>
  disappear ? sketch.UI.message(message) : sketch.UI.alert('🔭 Hubble', message);

export const sketchPrompt = (message: string, defaultValue: string) =>
  sketch.UI.getStringFromUser(message, defaultValue);

export const sketchInput = (message: string, options: string[]) =>
  sketch.UI.getSelectionFromUser(message, options);
