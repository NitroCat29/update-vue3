import { defineConfig, presetIcons } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  // rules: [['custom-rule', { color: 'red' }]],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange ',
  },
  theme: {
    colors: {
      primary: '#8d00ff',
      secondary: '#ff6500',
      accent: '#007c9c',
      neutral: '#252722',
      'base-100': '#fbfdf5',
      info: '#00d7ff',
      success: '#00c189',
      warning: '#c73e00',
      error: '#ff5770',
    },
  },
  rules: [
    [
      /^(?:border|b)()(?:-(.+))?$/,
      ([, width, color], { theme }) => {
        const borderWidth = width ? '1px' : `${width}px`;
        const borderColor =
          (theme as { colors: { [key: string]: string } }).colors[color] ||
          color;
        return {
          border: `${borderWidth} solid`,
          'border-color': borderColor,
        };
      },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.8,
      cdn: 'https://esm.sh/',
    }),
  ],
});
