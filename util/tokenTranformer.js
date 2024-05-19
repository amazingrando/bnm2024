import StyleDictionary from 'style-dictionary';
import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer';

const types = ['colors', 'fontSize'];

types.map((type) => {
  const sd = StyleDictionary.extend(
    makeSdTailwindConfig({
      type,
      source: [`./src/tokens/${type}.json`],
      buildPath: './dist/tokens/',
    }),
  );
  sd.buildAllPlatforms();
});
