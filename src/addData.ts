import { addRandomNumber } from './db/queries';

(async () => {
  console.log('Adding data...');

  await addRandomNumber();

  console.log('Done');

  process.exit(0);
})();
