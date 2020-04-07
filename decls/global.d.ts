declare module 'sketch' {
  import { Contents, Document, Page } from '@sketch-hq/sketch-file-format-ts/dist/v3-types';

  export const UI = {
    message: (message: string) => {},
    alert: (...messages: string[]) => {},
    getStringFromUser: (message: string, defaultValue: string) => string,
    getSelectionFromUser: <T = string>(message: string, options: T[]) => T,
  }

  export function fromNative(document: Contents['document']): {
    path: string;
    pages: Page[];
    save(
      callback: (error: Error) => void
    ): void;
  };
}

declare module '@skpm/*';

declare module '@skpm/child_process' {
  import { execSync as NodeExecSync } from "child_process";

  export const execSync: typeof NodeExecSync;
}
