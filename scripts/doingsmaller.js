  if((document.documentElement.clientWidth < 700) && (document.documentElement.clientWidth > 500)) {
   var truncate = document.querySelector(".caption--1 p");
   $clamp(truncate, {
    clamp: 2,
    useNativeClamp: false
   });
   var truncate = document.querySelector(".caption--2 p");
   $clamp(truncate, {
    clamp: 2,
    useNativeClamp: false
   });
   var truncate = document.querySelector(".caption--4 p");
   $clamp(truncate, {
    clamp: 3,
    useNativeClamp: false
   });
   var truncate = document.querySelector(".caption--6 p");
   $clamp(truncate, {
    clamp: 5,
    useNativeClamp: false
   });
  }