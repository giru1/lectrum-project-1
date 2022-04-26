import { saveToStorage } from './login';
import {loadPlugin as password_next} from "@babel/core/src/config/files/index-browser";


const loginBlock = document.querySelector('#loginBlock');
const step1Block = document.querySelector('#step1Block');
const regBlock = document.querySelector('#regBlock');

const regBtn = document.querySelector('#regBtn');
const btnNext = document.querySelector('#toStep2Btn');

const prevLogin = document.querySelector('#toLoginSvg');
const prevType = document.querySelector('#from3to2Svg');

const btnSlide1 = document.querySelector('#from1to2');
const btnSlide2 = document.querySelector('#from2to1');

/////////////////////////////////////////

function blockToggle(btn, nextBloc, activeBlock) {
	btn.addEventListener('click', (e) => {
		nextBloc.style.display = 'flex';
		activeBlock.style.display = 'none';
	});
}

blockToggle(regBtn, step1Block, loginBlock);
blockToggle(btnNext, regBlock, step1Block);

blockToggle(prevType, step1Block, regBlock);
blockToggle(prevLogin, loginBlock, step1Block);

blockToggle(btnSlide1, regBlock, step1Block);
if(btnSlide2){
	blockToggle(btnSlide2, step1Block, regBlock);
}


//////////////////////////////////////////////
// const student = document.querySelector('#user_student');
// const teacher = document.querySelector('#user_teacher');
// const obj = {};
//
// const registerBtn = document.querySelector('#createAccount');
// let studentArr = []
// let teacherArr = []
//
// const emailField = document.querySelector('#email');
// const passwordField = document.querySelector('#password');
// const passwordNext = document.querySelector('#password_next');
// const nameField = document.querySelector('#name');
//
// const formLogin = document.querySelector('#form-login');
//
//
// teacher.addEventListener('click', () => {
// 	obj.type = 'teacher';
// });
//
// student.addEventListener('click', () => {
// 	obj.type = 'student';
// });
//
// registerBtn.addEventListener('click', () => {
// 	if (obj.type === 'teacher') {
// 		localStorage.setItem('teacher', obj);
// 	} else if (obj.type === 'student') {
// 		const oldData = localStorage.getItem('student');
//
// 		localStorage.setItem('student', obj);
// 	}
//
// 	if (emailField.value === null || emailField.value === '') {
// 		emailField.classList.add('error');
// 		return false;
// 	}
// 	obj.email = emailField.value;
//
// 	if (passwordField.value !== passwordNext.value) {
// 		passwordField.classList.add('error');
// 		passwordNext.classList.add('error');
// 		return false;
// 	}
// 	obj.password = passwordField.value;
//
// 	const nameAndFamily = nameField.value.split(' ');
// 	if (nameAndFamily.length !== 2 || nameAndFamily[0].length < 3 || nameAndFamily[1].length < 3) {
// 		nameField.classList.add('error');
// 		return false;
// 	}
// 	obj.name = nameField.value;
//
// 	formLogin.reset();
// 	formLogin.submit();
// });
//
//
//
//
// console.log(obj);











/////////////////////////////

const createAccount = document.querySelector('#createAccount');