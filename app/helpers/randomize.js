import { helper } from '@ember/component/helper';

export default helper(function randomize(array) {
  let dodo = array[0]
  let animalNumber = dodo.length
  let randomNumber = Math.floor(Math.random() * animalNumber)
  return dodo[randomNumber]
});
