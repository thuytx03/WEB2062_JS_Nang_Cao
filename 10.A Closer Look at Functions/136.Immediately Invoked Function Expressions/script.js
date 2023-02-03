const runOnce=function(){
  console.log("This wil never run again");
};
runOnce();

//IIFE
(function(){
console.log('This wil never run again');
  const isPrivate=23;
  
}) ();

// console.log(isPrivate);
(() => console.log('This will ALSO never run again'))
();

{
  const isPrivate=23;
  var notPrivate=46;
  // console.log(isPrivate);
  console.log(notPrivate);
}