const WAVEBOX_CONTENT_IMPL_ENDPOINTS = {
  NOTIFICATION: 'Notification.js',
  CHROME: 'Chrome.js',
  CONTENT_WINDOW: 'ContentWindow.js',

  GMAIL_WINDOW_OPEN: 'GmailWindowOpen.js',
  GMAIL_NON_EXPERIMENTAL_WINDOW_OPEN: 'GmailNonExperimentalWindowOpen.js',
  ONEDRIVE_WINDOW_OPEN: 'OnedriveWindowOpen.js'
}
const VALID_WAVEBOX_CONTENT_IMPL_ENDPOINTS = new Set(Array.from(Object.keys(WAVEBOX_CONTENT_IMPL_ENDPOINTS).map((k) => WAVEBOX_CONTENT_IMPL_ENDPOINTS[k])))

module.exports = {
  // Wavebox API Implementations
  WAVEBOX_CONTENT_IMPL_PROTOCOL: 'wavebox',
  WAVEBOX_CONTENT_IMPL_ENDPOINTS: WAVEBOX_CONTENT_IMPL_ENDPOINTS,
  VALID_WAVEBOX_CONTENT_IMPL_ENDPOINTS: VALID_WAVEBOX_CONTENT_IMPL_ENDPOINTS,

  // Extensions
  WAVEBOX_CONTENT_EXTENSION_PROTOCOL: 'waveboxce',
  WAVEBOX_HOSTED_EXTENSION_PROTOCOL: 'waveboxhe',

  // Chrome
  CR_EXTENSION_PROTOCOL: 'chrome-extension',
  CR_EXTENSION_DOWNLOAD_PARTITION_PREFIX: '__download_chrome_extension:',
  CR_EXTENSION_BG_PARTITION_PREFIX: 'persist:__chrome_extension:',
  CR_RUNTIME_ENVIRONMENTS: {
    CONTENTSCRIPT: 'CONTENTSCRIPT',
    BACKGROUND: 'BACKGROUND',
    HOSTED: 'HOSTED'
  },
  CR_STORAGE_TYPES: {
    LOCAL: 'LOCAL',
    SYNC: 'SYNC'
  }
}
