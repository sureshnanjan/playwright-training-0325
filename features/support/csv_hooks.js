// File: features/support/hooks/csv_hooks.js

import { Before, After } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';

// Load different CSV files based on tags
Before({ tags: '@users' }, async function() {
  await this.loadCSVData('./test-data/users.csv');
});

Before({ tags: '@loaddata' }, async function() {
    await this.loadCSVData('./test-data/sample.csv');
  });

Before({ tags: '@products' }, async function() {
  await this.loadCSVData('./test-data/products.csv');
});

// Dynamic CSV loading based on scenario name
Before(async function(scenario) {
  const scenarioName = scenario.pickle.name.toLowerCase();
  if (scenarioName.includes('order')) {
    await this.loadCSVData('./test-data/orders.csv');
  }
});

// Clean up CSV data after scenarios
After(function() {
  this.csvData = [];
  this.currentRow = null;
});