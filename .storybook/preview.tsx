import type { Preview } from "@storybook/react";
import classNames from 'classnames';

import React from "react";
import { Inter } from 'next/font/google';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import styles from './preview.module.css';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: {
        iphone5: INITIAL_VIEWPORTS.iphone5,
        iphone6: INITIAL_VIEWPORTS.iphone6,
        iphone8p: INITIAL_VIEWPORTS.iphone8p,
        iphonexr: INITIAL_VIEWPORTS.iphonexr,
        ipad: {
          ...INITIAL_VIEWPORTS.ipad,
          styles: {
            ...INITIAL_VIEWPORTS.ipad.styles,
            width: '778px', // because safari doesn't include the scrollbar in media query calculations.
          },
        },
        ipad10p: INITIAL_VIEWPORTS.ipad10p,
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '1400px',
          },
        },
        desktopWide: {
          name: 'Desktop wide',
          styles: {
            width: '1600px',
            height: '1400px',
          },
        },
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    Story => (
      <main className={classNames(styles.root, inter.className)}>
        <Story />
      </main>
    ),
  ]
};

export default preview;
