import { createReadStream } from 'fs';
import { resolve as _resolve } from 'path';
import csv from 'csv-parser';

// Custom World to share context between steps
class CustomWorld {
  constructor() {
    this.csvData = [];
    this.currentRow = null;
  }

  async loadCSVData(filePath) {
    return new Promise((resolve, reject) => {
      createReadStream(_resolve(filePath))
        .pipe(csv())
        .on('data', (row) => this.csvData.push(row))
        .on('end', () => resolve(this.csvData))
        .on('error', reject);
    });
  }

  getRowByIndex(index) {
    return this.csvData[index];
  }

  findRowBy(columnName, value) {
    return this.csvData.find(row => row[columnName] === value);
  }
}

// Define the custom world
import { setWorldConstructor, Before } from '@cucumber/cucumber';
setWorldConstructor(CustomWorld);

