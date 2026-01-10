/* === GLOBAL UI CONFIGURATION === */
/* All tunable parameters live here */

window.UI_CONFIG = {
  /* ===== BOOT / PRELOADER ===== */
  boot: {
    stepIntervalMs: 80,        // loader dash speed
    totalSteps: 40,            // number of dashes
    fadeOutMs: 500,             // preloader fade out
    postBootDelayMs: 10        // delay before first page render
  },

  /* ===== DOT CANVAS (LOGO MORPH) ===== */
  dotCanvas: {
    spacing: 8,
    size: 2,
    morphSpeedX: 0.06,
    morphSpeedY: 0.08,
    fadeSlow: 0.005,
    fadeFast: 0.03
  },

  /* ===== ARCHIVE MORPH ===== */
  archive: {
    sampleGap: 4,
    dotRadius: 1,
    lerpSpeed: 0.08
  },

  /* ===== TYPING EFFECTS ===== */
  typing: {
    genericSpeedMs: 30,
    archiveCaptionSpeedMs: 35,
    homeTypeSpeedMs: 100,
    homeDeleteSpeedMs: 50,
    homeHoldMs: 3500,
    homeRestartDelayMs: 1000
  },

  /* ===== GLITCH EFFECT ===== */
  glitch: {
    iterations: 10,
    frameMs: 50
  },

  /* ===== STATUS BAR ===== */
  status: {
    resetDelayMs: 1500,
    scrollResetDelayMs: 1000
  },

  /* ===== TAP / GESTURES ===== */
  gestures: {
    tapWindowMs: 700,
    tapCountForInvert: 4
  }
};
