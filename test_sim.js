const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = __dirname;

// Mock localStorage
const localStorageMock = {
  store: {},
  getItem(key) { return this.store[key] || null; },
  setItem(key, value) { this.store[key] = String(value); },
  removeItem(key) { delete this.store[key]; },
  clear() { this.store = {}; }
};

// Mock Document and Element
class ElementMock {
  constructor(tagName = 'div') {
    this.tagName = tagName;
    this.attributes = {};
    this.childNodes = [];
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.classList = {
      classes: new Set(),
      add(c) { this.classes.add(c); },
      remove(c) { this.classes.delete(c); },
      toggle(c) { if (this.classes.has(c)) this.classes.delete(c); else this.classes.add(c); },
      contains(c) { return this.classes.has(c); }
    };
    this.dataset = {};
    this.listeners = {};
  }
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  }
  setAttribute(name, val) { this.attributes[name] = val; }
  getAttribute(name) { return this.attributes[name] || null; }
  appendChild(child) { this.childNodes.push(child); child.parentElement = this; }
  insertBefore(newChild, refChild) {
    const idx = this.childNodes.indexOf(refChild);
    if (idx === -1) this.childNodes.push(newChild);
    else this.childNodes.splice(idx, 0, newChild);
    newChild.parentElement = this;
  }
  querySelector(sel) {
    if (sel === 'i') {
      return this.childNodes.find(c => c.tagName === 'i') || new ElementMock('i');
    }
    if (sel === '.filter-btn.active') {
      return documentMock.elements.find(e => e.classList.contains('filter-btn') && e.classList.contains('active'));
    }
    return null;
  }
}

const documentMock = {
  elements: [],
  listeners: {},
  documentElement: new ElementMock('html'),
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  },
  createElement(tagName) {
    const el = new ElementMock(tagName);
    this.elements.push(el);
    return el;
  },
  querySelector(sel) {
    if (sel === '.filter-btn.active') {
      return this.elements.find(e => e.classList.contains('filter-btn') && e.classList.contains('active'));
    }
    return null;
  },
  getElementById(id) {
    let found = this.elements.find(e => e.id === id);
    if (found) return found;
    const newEl = new ElementMock();
    newEl.id = id;
    this.elements.push(newEl);
    return newEl;
  },
  querySelectorAll(selector) {
    if (selector === '[data-i18n]') {
      return this.elements.filter(e => e.getAttribute('data-i18n') !== null);
    }
    if (selector === '[data-i18n-placeholder]') {
      return this.elements.filter(e => e.getAttribute('data-i18n-placeholder') !== null);
    }
    if (selector === '.filter-btn') {
      return this.elements.filter(e => e.classList.contains('filter-btn'));
    }
    if (selector === '.resonator-card') {
      return this.elements.filter(e => e.classList.contains('resonator-card'));
    }
    if (selector === '.lang-opt') {
      return this.elements.filter(e => e.classList.contains('lang-opt'));
    }
    return [];
  }
};

// Set up globals
const sandbox = {
  window: {},
  document: documentMock,
  localStorage: localStorageMock,
  console: {
    log: (...args) => console.log('[SIM LOG]', ...args),
    warn: (...args) => console.warn('[SIM WARN]', ...args),
    error: (...args) => console.error('[SIM ERROR]', ...args)
  },
  CustomEvent: class {
    constructor(type, init) { this.type = type; this.detail = init ? init.detail : null; }
  },
  URL,
  URLSearchParams,
  location: {
    href: 'file:///C:/Users/cjcha/.gemini/antigravity/scratch/wuwa-aio/characters/index.html',
    search: '',
    origin: 'file://'
  },
  history: {
    pushState(state, title, url) { sandbox.location.href = url; },
    replaceState(state, title, url) { sandbox.location.href = url; }
  },
  setTimeout,
  setInterval,
  fetch(url) {
    console.log('[SIM FETCH]', url);
    return Promise.resolve({
      ok: true,
      json() {
        const jsonPath = path.join(baseDir, 'characters', url);
        return Promise.resolve(JSON.parse(fs.readFileSync(jsonPath, 'utf8')));
      }
    });
  },
  listeners: {},
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  },
  dispatchEvent(event) {
    const list = this.listeners[event.type] || [];
    list.forEach(cb => cb(event));
  }
};

sandbox.window = sandbox;
vm.createContext(sandbox);

// 1. Load i18n.js
const i18nPath = path.join(baseDir, 'js/i18n.js');
const i18nContent = fs.readFileSync(i18nPath, 'utf8');
vm.runInContext(i18nContent, sandbox, { filename: 'i18n.js' });

// 2. Load data.js
const dataJsPath = path.join(baseDir, 'characters/data.js');
const dataJsContent = fs.readFileSync(dataJsPath, 'utf8');
vm.runInContext(dataJsContent, sandbox, { filename: 'data.js' });

// 3. Parse index.html to extract the inline script at the bottom
const indexPath = path.join(baseDir, 'characters/index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');
const scriptRegex = /<!-- Web App Client Logic \(Vanilla JS\) -->\s*<script>([\s\S]*?)<\/script>\s*<\/body>/gi;
const match = scriptRegex.exec(indexContent);
if (!match) {
  console.error("Could not find the inline script in index.html!");
  process.exit(1);
}
const inlineScript = match[1];

// Run inline script
vm.runInContext(inlineScript, sandbox, { filename: 'index.html-inline' });

// Trigger DOMContentLoaded
console.log("Triggering DOMContentLoaded...");
const domContentLoadedListeners = documentMock.listeners['DOMContentLoaded'] || [];
domContentLoadedListeners.forEach(cb => cb());

// Call loadCharacters explicitly and await it
if (sandbox.loadCharacters) {
  sandbox.loadCharacters()
    .then(() => {
      const grid = documentMock.getElementById('resonators-grid');
      console.log("GRID INNER HTML LENGTH:", grid.innerHTML.length);
      if (grid.innerHTML.includes('Failed to load resonator guides')) {
        console.error("GRID LOAD FAILED:\n", grid.innerHTML);
      } else {
        console.log("GRID LOADED SUCCESSFULLY!");
      }
    })
    .catch(err => {
      console.error("UNHANDLED ERROR IN LOAD:", err);
    });
} else {
  console.error("loadCharacters function not found on sandbox window!");
}
