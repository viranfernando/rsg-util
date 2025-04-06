#!/usr/bin/env node

const {
  rsgUtil,
  rsgUtilShort,
  rsgUtilHex,
  rsgUtilUUID,
  rsgUtilReadable,
} = require('./index');

const args = require('minimist')(process.argv.slice(2));
const interactive = args.i || args.interactive || false;
const copy = args.copy || false;

async function run() {
  const clipboardy = await import('clipboardy');
  const inquirer = await import('inquirer');

  // Shortcuts for CLI commands
  const length = parseInt(args.length || args.l || 10);
  const withTimestamp = args.timestamp || args.t || false;
  const separator = args.separator || args.s || '';
  const charset = args.charset || args.c;

  let result = '';

  if (args.uuid) {
    result = rsgUtilUUID();
  }  else if (interactive) {
    const answers = await inquirer.default.prompt([
      { type: 'number', name: 'length', message: 'Length:', default: 10 },
      { type: 'confirm', name: 'withTimestamp', message: 'Include timestamp?', default: false },
      { type: 'input', name: 'separator', message: 'Separator:', default: '' },
      { type: 'input', name: 'charset', message: 'Custom charset:', default: '' },
      { type: 'confirm', name: 'copy', message: 'Copy to clipboard?', default: false },
    ]);

    result = rsgUtil(
      answers.length,
      answers.withTimestamp,
      answers.separator,
      answers.charset || undefined
    );

    if (answers.copy) {
      clipboardy.default.writeSync(result);
      console.log('📋 Copied to clipboard');
    }
  } else {
    result = rsgUtil(length, withTimestamp, separator, charset);
  }

  console.log(result);

  if (copy && result) {
    clipboardy.default.writeSync(result);
    console.log('📋 Copied to clipboard');
  }
}

run();
