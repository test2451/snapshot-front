const requireFile = require.context(
  '@snapshot-labs/snapshot.js/src/strategies',
  true,
  /index\.ts$/
);

export default Object.fromEntries(
  requireFile
    .keys()
    .filter(fileName => fileName !== './index.ts')
    .map(fileName => {
      const key = 'pie';
      const strategy = requireFile(fileName);
      strategy.key = key;
      return [key, strategy];
    })
);
