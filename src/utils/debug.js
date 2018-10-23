let isDebug = false;
let startTime;

export const debug = (...messages) => {
  const debugMessages = ["[sketchxport-plugin] 💎"];
  messages.forEach((message) => {
    debugMessages.push(message);
    debugMessages.push("💎")
  })
    if(isDebug) {
        console.log(...debugMessages)
    }
}

export function startOfPlugin(debugEnabled = false) {
  startTime = new Date();
  isDebug = debugEnabled;
  console.log (
    '[sketchxport-plugin] ☀️ ☀️ ☀️ ☀️ ',
    '\n\n\n',
  );
}

export function endOfPlugin() {
    const date = new Date();
  const duration = date - startTime;
  console.log (
    `[sketchxport-plugin] 🌅 🌅 🌅 🌅  ${date} in ${duration}ms`,
    '\n\n\n',
  );
}
