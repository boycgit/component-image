# Rax Component Image

This repository is inspired by [component-image](https://github.com/corygibbons/component-image)

Generate image snapshots of Rax components for visual regression testing.
This package will only give you the image, you'll have to diff it with something else (like [`jest-image-snapshot`](https://www.npmjs.com/package/jest-image-snapshot)).

[![npm version](https://img.shields.io/npm/v/rax-component-image.svg?style=flat-square)](https://www.npmjs.com/package/rax-component-image)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Usage

#### Install

```
npm install rax-component-image
```

#### Use

```js
import { generateImage } from 'rax-component-image';

generateImage(component, options);
```

#### Default options

```js
options = {
  // Path to .css file
  stylesheet: undefined;
  // Change size of screenshot
  viewport: {
    width: 800,
    height: 600,
  },
  renderer: RaxServerRenderer.renderToString,
  image: {
    // Path to save image, likely unnecessary
    path: undefined,
  }
}
```

## Integration Example

Usage with `jest-image-snapshot`:

```js
import { createElement } from 'rax';
import { generateImage } from 'rax-component-image'

const component = (
  <div>
    <h1>The Component</h1>
  </div>
);

describe('Test Component', () => {
  it('has no visual regressions', () => {

    return generateImage(component, {
      stylesheet: '../../style.css',
      viewport: {
        width: 1000,
        height: 860
      }
    }).then(image => {
      expect(image).toMatchImageSnapshot();
    });

  };
};
```
