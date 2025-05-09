// logger.js
import { existsSync, mkdirSync, writeFileSync, appendFileSync } from 'fs';
import { dirname } from 'path';

/**
 * Logger class for test automation
 * Supports console and file logging with different log levels
 */
class Logger {
  /**
   * Create a new Logger instance
   * @param {Object} options - Logger configuration
   * @param {string} options.logLevel - Minimum log level to display ('debug'|'info'|'warn'|'error')
   * @param {boolean} options.console - Whether to log to console
   * @param {boolean} options.file - Whether to log to file
   * @param {string} options.filePath - Path to log file (if file logging enabled)
   */
  constructor(options = {}) {
    // Default options
    this.options = {
      logLevel: 'info',
      console: true,
      file: false,
      filePath: './logs/automation.log',
      ...options
    };

    // Log levels with numeric values for comparison
    this.logLevels = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };

    // Initialize file logging if enabled
    if (this.options.file) {
      this.setupFileLogging();
    }
  }

  /**
   * Setup file logging
   * Creates log directory if it doesn't exist
   */
  setupFileLogging() {
    const logDir = dirname(this.options.filePath);
    
    if (!existsSync(logDir)) {
      mkdirSync(logDir, { recursive: true });
    }
    
    // Clear existing log file or create it
    writeFileSync(this.options.filePath, '');
  }

  /**
   * Get current timestamp in format YYYY-MM-DD HH:MM:SS.mmm
   * @returns {string} Formatted timestamp
   */
  getTimestamp() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').replace('Z', '');
  }

  /**
   * Determines if a message should be logged based on level
   * @param {string} level - Log level of the message
   * @returns {boolean} Whether the message should be logged
   */
  shouldLog(level) {
    return this.logLevels[level] >= this.logLevels[this.options.logLevel];
  }

  /**
   * Format a log message
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @returns {string} Formatted log message
   */
  formatMessage(level, message) {
    return `[${this.getTimestamp()}] [${level.toUpperCase()}] ${message}`;
  }

  /**
   * Write log message to configured outputs
   * @param {string} level - Log level
   * @param {string} message - Log message
   */
  log(level, message) {
    if (!this.shouldLog(level)) {
      return;
    }

    const formattedMessage = this.formatMessage(level, message);

    // Console logging
    if (this.options.console) {
      switch (level) {
        case 'debug':
          console.debug(formattedMessage);
          break;
        case 'info':
          console.info(formattedMessage);
          break;
        case 'warn':
          console.warn(formattedMessage);
          break;
        case 'error':
          console.error(formattedMessage);
          break;
      }
    }

    // File logging
    if (this.options.file) {
      appendFileSync(this.options.filePath, formattedMessage + '\n');
    }
  }

  /**
   * Log at debug level
   * @param {string} message - Log message
   */
  debug(message) {
    this.log('debug', message);
  }

  /**
   * Log at info level
   * @param {string} message - Log message
   */
  info(message) {
    this.log('info', message);
  }

  /**
   * Log at warn level
   * @param {string} message - Log message
   */
  warn(message) {
    this.log('warn', message);
  }

  /**
   * Log at error level
   * @param {string} message - Log message
   */
  error(message) {
    this.log('error', message);
  }

  /**
   * Log start of a step
   * @param {string} stepName - Name of the step
   */
  step(stepName) {
    this.info(`STEP: ${stepName}`);
  }

  /**
   * Create an enhanced logger for a specific page object
   * @param {string} context - Context name (page object name)
   * @returns {Object} Logger with context
   */
  withContext(context) {
    const contextLogger = {};
    
    // Create context-specific versions of all log methods
    ['debug', 'info', 'warn', 'error', 'step'].forEach(method => {
      contextLogger[method] = (message) => {
        this[method](`[${context}] ${message}`);
      };
    });
    
    return contextLogger;
  }

  /**
   * Log start of a test case
   * @param {string} testName - Test case name
   */
  startTest(testName) {
    this.info(`═════════════════════════════════════════════════════`);
    this.info(`▶️ STARTING TEST: ${testName}`);
    this.info(`═════════════════════════════════════════════════════`);
  }

  /**
   * Log end of a test case
   * @param {string} testName - Test case name
   * @param {boolean} passed - Whether test passed or failed
   */
  endTest(testName, passed) {
    this.info(`═════════════════════════════════════════════════════`);
    if (passed) {
      this.info(`✅ TEST PASSED: ${testName}`);
    } else {
      this.error(`❌ TEST FAILED: ${testName}`);
    }
    this.info(`═════════════════════════════════════════════════════\n`);
  }
}

export default Logger;