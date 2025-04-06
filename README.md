# rsg-util

A simple utility to generate random strings with optional timestamp support. Includes UUID and readable generators, CLI, and interactive mode.

---

## 📦 Installation

```bash
npm install rsg-util
```

Or run instantly using `npx`:

```bash
npx rsg-util
```

---

## 🔧 Usage in Code

### CommonJS (Node default)
```js
const {
  rsgUtil,
  rsgUtilShort,
  rsgUtilHex,
  rsgUtilUUID,
} = require('rsg-util');
```

### ES Modules (ESM)
```js
import {
  rsgUtil,
  rsgUtilShort,
  rsgUtilHex,
  rsgUtilUUID,
} from 'rsg-util';
```

---

## 🧠 TypeScript Support

This package includes full TypeScript typings (`index.d.ts`) out of the box — no config needed.

---

## ⚡ Examples

```js
// Basic 10-character alphanumeric string
console.log(rsgUtil()); // e.g., 'aZ0bXc93Lm'

// 12-character string with timestamp
console.log(rsgUtil(12, true)); // e.g., 'G7xP9wQa0BcZ1712384600123'

// 8-character string with timestamp and dash separator
console.log(rsgUtil(8, true, '-')); // e.g., 'a9f2d1c3-1712384611123'

// Custom charset
console.log(rsgUtil(6, false, '', 'ABC123')); // e.g., 'A2C1B3'

// Short 6-character string
console.log(rsgUtilShort()); // e.g., 'Tz3Xy7'

// Hex-style string
console.log(rsgUtilHex()); // e.g., 'a3b9d4f2'

// UUID v4
console.log(rsgUtilUUID()); // e.g., 'ae1b765d-d232-45e2-9a89-7b292278b917'

```

---

## 🛠️ API

### `rsgUtil(length = 10, withTimestamp = false, separator = '', charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')`

| Parameter       | Type      | Description                                |
|----------------|-----------|--------------------------------------------|
| `length`        | `number`  | Length of the output string                |
| `withTimestamp` | `boolean` | Whether to append a timestamp              |
| `separator`     | `string`  | Separator between string and timestamp     |
| `charset`       | `string`  | Characters to randomly pick from           |

### Other Helpers

- `rsgUtilShort(withTimestamp?, separator?)`
- `rsgUtilHex(length?, withTimestamp?, separator?)`
- `rsgUtilUUID()`

---

## 🖥️ CLI Usage

You can also use `rsg-util` from the terminal:

```bash
npx rsg-util [options]
```

### Available Flags

| Flag            | Alias | Description                            |
|-----------------|-------|----------------------------------------|
| `--length`      | `-l`  | Length of the string                   |
| `--timestamp`   | `-t`  | Append timestamp                       |
| `--separator`   | `-s`  | Custom separator for timestamp         |
| `--charset`     | `-c`  | Custom character set                   |
| `--copy`        |       | Copy result to clipboard               |
| `--uuid`        |       | Generate a UUID v4                     |
| `--interactive` | `-i`  | Launch interactive mode                |

---

### Examples

```bash
# Default 10-character string
npx rsg-util

# 16 characters, timestamp, dash separator
npx rsg-util --length=16 --timestamp --separator=-

# Custom charset
npx rsg-util --length=6 --charset=ABC123

# UUID mode
npx rsg-util --uuid

# Interactive mode
npx rsg-util --interactive
```

---

![npm](https://img.shields.io/npm/v/rsg-util)
![license](https://img.shields.io/npm/l/rsg-util)
![downloads](https://img.shields.io/npm/dm/rsg-util)

## 📄 License

This project is licensed under the [MIT License](./rsg-util/LICENSE).