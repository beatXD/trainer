console.log('Step 1');
funcSync();
console.log('Step 3');

function funcSync() {
  console.log('Step 2');
}
setTimeout(() => {
  console.log('Step 5');
}, 1500);

console.log('Step 4');
