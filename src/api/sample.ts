import uniqid from 'uniqid';

export default (example: string = 'Hello') => {
  console.log('-----------');
  console.log(example, uniqid());
  console.log('-----------');
  return;
};
