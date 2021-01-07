import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 67,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 41,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 67,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 41,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 67,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 41,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 67,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 41,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 67,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 41,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 67,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 41,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 67,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 41,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 66,
  },
  {
    text: 'bad',
    value: 47,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'thought',
    value: 46,
  },
  {
    text: 'bad',
    value: 67,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 49,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'thought',
    value: 47,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'thought',
    value: 36,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'thought',
    value: 58,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'bad',
    value: 57,
  },
  {
    text: 'mistake',
    value: 50,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 50,
  }
]

export default function WordCloud() {
  return <ReactWordcloud  words={words} />
}