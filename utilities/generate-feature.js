import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load data from JSON file
const loadLocalTestData = () => {
  const dataPath = join(__dirname, '../test-data/calculator-data.json');
  return JSON.parse(readFileSync(dataPath, 'utf8'));
};

// Load data from API
const loadRemoteTestData = async () => {
  try {
    const response = await fetch('https://api.example.com/test-data');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch test data:', error);
    return [];
  }
};

// Main function using async/await
const generateFeatureFile = async () => {
  // Choose your data source
  // const testData = loadLocalTestData();
  const testData = await loadLocalTestData();
  
  // Create feature file content
  let featureContent = `Feature: Dynamic Calculator Tests

Scenario Outline: Addition test
  Given I have entered <first> into the calculator
  And I have entered <second> into the calculator
  When I press add
  Then the result should be <result> on the screen

Examples:
  | first | second | result |`;

  // Add each test data row
  testData.forEach(data => {
    featureContent += `\n  | ${data.first} | ${data.second} | ${data.result} |`;
  });

  // Ensure directory exists
  const featurePath = join(__dirname, '../features/dynamic-calculator.feature');
  const directory = dirname(featurePath);

  if (!existsSync(directory)) {
    mkdirSync(directory, { recursive: true });
  }

  // Write to file
  writeFileSync(featurePath, featureContent);
  console.log(`Generated feature file at: ${featurePath}`);
};

// Execute the main function
generateFeatureFile().catch(error => {
  console.error('Error generating feature file:', error);
  process.exit(1);
});