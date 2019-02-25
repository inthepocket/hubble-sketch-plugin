/**
 * Development and environmental config for the plugin.
 */
export default {
  debugEnabled: process.env.NODE_ENV !== 'production',
  withSuccessSound: true,
  withFailureSound: true,
}
