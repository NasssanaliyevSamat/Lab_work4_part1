// задание а b
// function loadImg(success, error){
//     let image = <HTMLImageElement>document.getElementById('image');
//     image.src = 'http://cdn.motorpage.ru/Photos/800/88FC.jpg';
//     document.body.appendChild(image);
//
//     image.onload = success;
//
//     image.onerror = error;
//
// }
//
// loadImg(() => {
//     console.log('image loaded successfully');
//     loadImg( () => {
//         console.log('image loaded successfully');
//     },() =>{
//         console.log('image loading failed');
//     });
//     },() =>{
//     console.log('image loading failed');
//     loadImg(()=>{
//         console.log('image loaded successfully 2');
//     }, () => {
//         console.log('image loading failed 2');
//     })
// });
//
// c
// function success() {
//     console.log("OK");
//
// }
//
// function error(message){
//     console.log("We have a problem"+message);
// }
//
// function loadImg(){
//     // @ts-ignore
//     return new Promise(function (resolve,reject){
//         let image = <HTMLImageElement>document.getElementById('image');
//         image.src = 'http://cdn.motorpage.ru/Photos/800/88FC.jpg';
//
//         document.body.appendChild(image);
//
//         image.onload = resolve;
//         image.onerror = () => reject (new Error('error while loading'));
//     });
// }
//
// let promise = loadImg();
// promise.then(success,error).catch(error);;
// promise.finally(() => console.log('done'));
//
//
// d
// function success() {
//     console.log("OK");
//
// }
//
// function error(message){
//     console.log("We have a problem"+message);
// }
//
// function loadImg(){
//     // @ts-ignore
//     return new Promise(function (resolve,reject){
//         let image = <HTMLImageElement>document.getElementById('image');
//         image.src = 'http://cdn.motorpage.ru/Photos/800/88FC.jpg';
//         console.log("Image source");
//         // document.body.appendChild(image);
//         setTimeout(()=>document.body.appendChild(image), image.onload = resolve);
//         console.log("Continue");
//
//
//         // image.onload = resolve;
//         image.onerror = () => reject (new Error('error while loading'));
//     });
// }
//
// let promise = loadImg();
// promise.then(success,error);
// promise.then(success).then(success).catch(error);
// promise.finally(() => console.log('done'));
// promise.then(success,error);

// e
// async function LoadImg(){
//     let image = <HTMLImageElement>document.getElementById('image');
//     image.src = 'http://cdn.motorpage.ru/Photos/800/88FC.jpg';
//     let image1 = <HTMLImageElement>document.getElementById('image1');
//     image1.src = 'http://cdn.motorpage.ru/Photos/800/88FC.jpg';
//     let image2 = <HTMLImageElement>document.getElementById('image2');
//     image2.src = 'http://cdn.motorpage.ru/Photos/800/88FC.jpg';
//     // @ts-ignore
//     await new Promise((resolve,reject) => setTimeout(resolve,2000));
//     document.body.appendChild(image);
//     document.body.appendChild(image1);
//     document.body.appendChild(image2);
//     return image;
//
// }
//
// document.addEventListener('DOMContentLoaded', ()=> {
//     LoadImg().then(function (image){
//     console.log("Images has loaded");
//     });
// });



