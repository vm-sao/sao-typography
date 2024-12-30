import { writeFileSync } from 'node:fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

(() => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputDir = join(__dirname, '../../', 'dist/packages/core');
  const keys = {
    h1: {
      'font-size': '72px',
      'line-height': '90px',
    },
    h2: {
      'font-size': '60px',
      'line-height': '72px',
    },
    h3: {
      'font-size': '48px',
      'line-height': '60px',
    },
    h4: {
      'font-size': '36px',
      'line-height': '44px',
    },
    h5: {
      'font-size': '30px',
      'line-height': '38px',
    },
    h6: {
      'font-size': '24px',
      'line-height': '32px',
    },
    b1: {
      'font-size': '20px',
      'line-height': '30px',
    },
    b2: {
      'font-size': '18px',
      'line-height': '28px',
    },
    b3: {
      'font-size': '16px',
      'line-height': '24px',
    },
    b4: {
      'font-size': '14px',
      'line-height': '20px',
    },
    b5: {
      'font-size': '12px',
      'line-height': '18px',
    },
  };
  const resolver = (object, prefix) => {
    Object.keys(object).forEach(key => {
      if (typeof object[key] === 'object') {
        resolver(object[key], `${prefix}-${key}`);
      } else {
        css += `  --${prefix}-${key}: ${object[key]};\n`;
      }
    });
  };

  let css = '';
  resolver(keys, 'sao-typography');
  const root = `@import "@fontsource/work-sans";\n\n:root {\n${css}}`;

  writeFileSync(join(outputDir, 'index.css'), root);
  writeFileSync(join(outputDir, 'index.scss'), root);
})();
