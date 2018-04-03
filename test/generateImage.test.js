import { createElement, Component, render } from 'rax';
import Text from 'rax-text';
import View from 'rax-view';
import fs from 'fs';
import path from 'path';
import { generateImage } from '../index';

const styles = {
  container: {
    width: '750px',
    backgroundColor: '#eee',
  },
  header: {
    fontSize: '40px',
    color: 'white',
    backgroundColor: '#f44336',
  },
  body: {
    fontSize: '20px',
  },
};
const component = (
  <View style={styles.container}>
    <Text style={styles.header}>Component Image</Text>
    <Text style={styles.body}>Hello world</Text>
  </View>
);

describe('generateImage()', () => {
  it('saves an image', async () => {
    const result = await generateImage(component, {
      stylesheet: path.resolve(__dirname, 'data/sample.css'),
      image: {
        path: './test/data/image.png',
      },
    });

    const image = fs.existsSync(path.join(__dirname, 'data/image.png'));
    expect(image).toBe(true);
  });
});
