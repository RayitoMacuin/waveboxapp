const WINDOW_OPEN_MODES = Object.freeze({
  CONTENT: 'CONTENT',
  CONTENT_PROVISIONAL: 'CONTENT_PROVISIONAL',
  POPUP_CONTENT: 'POPUP_CONTENT',
  EXTERNAL: 'EXTERNAL',
  EXTERNAL_PROVISIONAL: 'EXTERNAL_PROVISIONAL',
  DEFAULT: 'DEFAULT',
  DEFAULT_IMPORTANT: 'DEFAULT_IMPORTANT',
  DEFAULT_PROVISIONAL: 'DEFAULT_PROVISIONAL',
  DEFAULT_PROVISIONAL_IMPORTANT: 'DEFAULT_PROVISIONAL_IMPORTANT',
  DOWNLOAD: 'DOWNLOAD',
  SUPPRESS: 'SUPPRESS',
  CURRENT: 'CURRENT',
  BLANK_AND_CURRENT: 'BLANK_AND_CURRENT',
  CURRENT_PROVISIONAL: 'CURRENT_PROVISIONAL',
  BLANK_AND_CURRENT_PROVISIONAL: 'BLANK_AND_CURRENT_PROVISIONAL',
  ASK_USER: 'ASK_USER'
})

const NAVIGATE_MODES = Object.freeze({
  DEFAULT: 'DEFAULT',
  SUPPRESS: 'SUPPRESS',
  OPEN_EXTERNAL: 'OPEN_EXTERNAL',
  OPEN_CONTENT: 'OPEN_CONTENT',
  OPEN_CONTENT_RESET: 'OPEN_CONTENT_RESET',
  CONVERT_TO_CONTENT: 'CONVERT_TO_CONTENT',
  CONVERT_TO_CONTENT_POPUP: 'CONVERT_TO_CONTENT_POPUP',
  CONVERT_TO_EXTERNAL: 'CONVERT_TO_EXTERNAL',
  CONVERT_TO_DEFAULT: 'CONVERT_TO_DEFAULT'
})

export {
  WINDOW_OPEN_MODES,
  NAVIGATE_MODES
}
