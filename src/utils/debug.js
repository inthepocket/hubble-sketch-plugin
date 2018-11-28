let isDebug = false;
let startTime;

export const debug = (...messages) => {
  const debugMessages = ['\n 💎[hubble-plugin]\n'];
  messages.forEach(message => {
    debugMessages.push('💎');
    debugMessages.push(message);
    debugMessages.push('💎\n');
  });
  if (isDebug) {
    console.log(...debugMessages);
  }
};

export function startOfPlugin(debugEnabled = false) {
  startTime = new Date();
  isDebug = debugEnabled;
  console.log('[hubble-plugin] ☀️ ☀️ ☀️ ☀️ ', '\n\n\n');
}

export function endOfPlugin() {
  const date = new Date();
  const duration = date - startTime;
  console.log(`[hubble-plugin] 🌅 🌅 🌅 🌅  ${date} in ${duration}ms`, '\n\n\n');
}
