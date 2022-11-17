/*
 * stores.js
 * 
 *  Store data to pass between UI components
 */

import { writable } from 'svelte/store'

// Boolean: Open WebLC3 documentation modal
export const toggleHelp = writable(false)

// String: Filename of current .asm file
export const openedFile = writable("No file provided")

// String: Filename of assembled .obj file
export const assembledFile = writable("SIMULATOR STATUS")

// String: "editor" or "simulator" view
export const currentView = writable("editor")

// Boolean: Select Console (window is key interruptable)
export const consoleSelected = writable(false)

// String: ID of active stoplight in SimulatorStatus
export const activeStoplight = writable("sim-status-not-ready")

export const UIReady = writable(false)


/* [Boolean, Boolean]:
 *  [0] - Enable Simulator Memory component reload
 *  [1] - Reset Memory pointer to .orig
 */
export const reloadOverride = writable([false, false])