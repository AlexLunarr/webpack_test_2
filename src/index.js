
import './index.html';
import './index.scss';
import code from './img/slider-pic5_1.png' ;
import { mult, sum } from './modules/calc';




const imgWrap = document.querySelector('.image');
const img = new Image();
img.src = code;
img.width = 700
imgWrap.append(img)


console.log(mult(3, 4));
console.log(sum(3, 4));