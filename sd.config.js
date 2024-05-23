const StyleDictionary = require('style-dictionary');
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer');

const types = ['colors', 'fontSize'];

// eslint-disable-next-line array-callback-return
types.map((type) => {
  const sd = StyleDictionary.extend(
    makeSdTailwindConfig({
      type,
      source: [`./tokens/${type}.json`],
      buildPath: './tokens/tailwind/',
    }),
  );
  sd.buildAllPlatforms();
});
