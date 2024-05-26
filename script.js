// 1) Creează o funcție care primește ca parametru un array de 
// numere și returnează valoare impara maxima din array.
// //  Ex: pentru [5, 7, 2, 3, 10] returnează 7


// const arrayDeNumereMax = (array) => {
//     let maxim = array[0];
    

//     for (let i = 1; i < array.length; i++) {

//         if (maxim < array[i] && array[i] % 2 === 1) {
//              maxim = array[i];
            
//             };
           
//         };
//         return maxim
//         };

// console.log (arrayDeNumereMax([5, 7, 2, 3, 10]));


// 2) Creează o funcție care primește ca parametru un array de
//  numere și returnează indexul valoarii impare maxime din array.
//   Ex: pentru [5, 7, 2, 3, 10] returnează 1


// const arrayDeNumereMax = (array) => {
//     let maxim = array[0];
//     let index = 0;

//     for (let i = 1; i < array.length; i++) {

//         if (maxim < array[i] && array[i] % 2 === 1) {
//              maxim = array[i];
//              index = [i];
//             };
           
//         };
//         return index
//         };

// console.log (arrayDeNumereMax([5, 7, 2, 3, 10]));




// 3) Creează o funcție care primește ca parametru un array de numere și returnează
//  valoare minima din array, dar nu mai mică decât zero.
//   Ex: pentru [5, -7, 2, 3, -1, 10] returnează 2

// const arrayDeNumereMax = (array) => {
//     let minim = array[0];
    
//     for (let i = 1; i < array.length; i++) {

//         if (minim > array[i] && array[i] > 0) {
//              minim = array[i];
            
//             };
           
//         };
//         return minim
//         };

// console.log (arrayDeNumereMax([5, -7, 2, 3, -1, 10]));




// 4) Creează o funcție care primește ca parametru un array de numere și returnează diferența
//  dintre maximul și minimul din array.


// const arrayDeNumereMax = (array) => {
//     let minim = array[0];
//     let maxim = array[0];
//     let diferenta = 0;
       
//     for (let i = 1; i < array.length; i++) {
//      if (minim > array[i]) 
//              minim = array[i];
//      if (maxim < array[i]) 
//         maxim = array[i];
            
           
//             };
//             return minim - maxim;
//         };
        
        

// console.log (arrayDeNumereMax([5, -7, 2, 3, -1, 10]));



// Pentru ca am folosit aceleasi denumiri ale functiilor cat si parametrilor (pentru a 
// castiga timp), dupa ce am terminat exercitiul, l-am comentat. Asa ca, sa nu ma certi :)))