// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
// True
test('checks if phone number is valid using parantheses', () =>{
  expect(isPhoneNumber("(858)091-8171")).toBe(true);
});

test('checks if phone number is valid using only hypen', () =>{
  expect(isPhoneNumber("858-091-8171")).toBe(true);
});

// False
test('incorect spaces of numbers for phone number', () =>{
  expect(isPhoneNumber("(858)0913-817")).toBe(false);
});

test('Phone number contains alphabet', () =>{
  expect(isPhoneNumber("9d9-3432")).toBe(false);
});


// isEmail
// True
test('valid gmail style', () =>{
  expect(isEmail("123@gmail.com")).toBe(true);
})

test('valid ucsd email with alphanumerics', () => {
  expect(isEmail("wd231d2sa_@ucsd.edu")).toBe(true);
})

// False
test('no domain after @', () => {
  expect(isEmail("23123@")).toBe(false);
})

test('no input', () => {
  expect(isEmail('')).toBe(false);
})


// isStrongPassword: starts with letter, between 4 and 15 in length, only alphanumeric + unerscore
// True
test('length 4 strong password', () => {
  expect(isStrongPassword("a234")).toBe(true);
})

test('length 15 strong password', () => {
  expect(isStrongPassword("B34_53js639zxFa")).toBe(true);
})

// False
test('shorter than 4 in length', () => {
  expect(isStrongPassword('123')).toBe(false);
})

test('starts with number', () => {
  expect(isStrongPassword("1abc")).toBe(false);
})


// isDate: XX / XX / XXXX where first two entries can be 1 or 2 digits
// True
test('filled out date', () => {
  expect(isDate("12/25/2000")).toBe(true);
})

test('single digit entries', () => {
  expect(isDate('1/1/2001')).toBe(true);
})

// False
test('missing values', () => {
  expect(isDate('1/2001')).toBe(false);
})

test('has letters', () => {
  expect(isDate('1/a/20b1')).toBe(false);
})


// isHexColor: 3 or 6 char hex code for HTML or CSS
// True
test('3 digit hex', () => {
  expect(isHexColor('#FFF')).toBe(true);
})

test('6 digit hex', () => {
  expect(isHexColor('#000000')).toBe(true);
})

// False
test('wrong number of digits', () => {
  expect(isHexColor('#345a')).toBe(false);
})

test('unusable characters', () => {
  expect(isHexColor('#--=+')).toBe(false);
})