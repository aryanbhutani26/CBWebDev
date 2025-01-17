// console.log('HI');
// setInterval(()=>{
// const car =document.createElement('div');
// const para = document.createElement('p');
// const cross = document.createElement('button');
// const banner = document.querySelector('#banner');
// cross.textContent = 'X';
// function createBanner(){

// }
// para.textContent = 'This is a banner';
// car.append(para);
// car.append(cross);
// banner.append(car);
// cross.addEventListener('click',()=>{
//     banner.removeChild(car);
// } ), 2000});


// Promise 
let First=(()=>{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                console.log('HI');
               resolve();
            }catch(err){
                reject();}
        }, 2000);
})})
//  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try{
//             console.log('HI');
//             resolve();
//         }catch(err){
//             reject();}
//     }, 2000);
  
// })
First();


