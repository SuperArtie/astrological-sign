/*******************
 * "ASTROLOGICAL
 *    MADNEZZZZZZZ"
 *    BY NATHAN
 *******************/

var prompt = require('sync-prompt').prompt;

var today = new Date();
//console.log(today);
var dob = prompt('dob ');
var dob2 = new Date(dob);
//console.log(dob2);
var age = today.getFullYear() - dob2.getFullYear();
var bd = dob2.getMonth() + '/' + dob2.getDate() + '/' + today.getFullYear();
bd = new Date(bd);
if(today.getTime()<bd.getTime())
{
  age--;
}
console.log(age);


//ARIES
if(dob2.getMonth()===2 && dob2.getDate() >= 21)
{
  console.log('aries');
}
else if(dob2.getMonth()===3 && dob2.getDate() <= 20)
{
  console.log('aries');
}
//TAURUS
else if(dob2.getMonth()===3 && dob2.getDate() >= 21)
{
  console.log('taurus');
}
else if(dob2.getMonth()===4 && dob2.getDate() <= 20)
{
  console.log('taurus');
}
//GEMINI
else if(dob2.getMonth()===4 && dob2.getDate() >= 21)
{
  console.log('gemini');
}
else if(dob2.getMonth()===5 && dob2.getDate() <= 20)
{
  console.log('gemini');
}
//CANCER
else if(dob2.getMonth()===5 && dob2.getDate() >= 21)
{
  console.log('cancer');
}
else if(dob2.getMonth()===6 && dob2.getDate() <= 22)
{
  console.log('cancer');
}
//LEO
else if(dob2.getMonth()===6 && dob2.getDate() >= 23)
{
  console.log('leo');
}
else if(dob2.getMonth()===7 && dob2.getDate() <= 22)
{
  console.log('leo');
}
//VIRGO
else if(dob2.getMonth()===7 && dob2.getDate() >= 23)
{
  console.log('virgo');
}
else if(dob2.getMonth()===8 && dob2.getDate() <= 22)
{
  console.log('virgo');
}
//LIBRA
else if(dob2.getMonth()===8 && dob2.getDate() >= 23)
{
  console.log('libra');
}
else if(dob2.getMonth()===9 && dob2.getDate() <= 22)
{
  console.log('libra');
}
//SCORPIO
else if(dob2.getMonth()===9 && dob2.getDate() >= 23)
{
  console.log('scorpio');
}
else if(dob2.getMonth()===10 && dob2.getDate() <= 22)
{
  console.log('scorpio');
}
//SAGITTARIUS
else if(dob2.getMonth()===10 && dob2.getDate() >= 23)
{
  console.log('sagittarius');
}
else if(dob2.getMonth()===11 && dob2.getDate() <= 21)
{
  console.log('sagittarius');
}
//CAPRICORN
else if(dob2.getMonth()===11 && dob2.getDate() >= 22)
{
  console.log('capricorn');
}
else if(dob2.getMonth()===0 && dob2.getDate() <= 19)
{
  console.log('capricorn');
}
//AQUARIUS
else if(dob2.getMonth()===0 && dob2.getDate() >= 20)
{
  console.log('aquarius');
}
else if(dob2.getMonth()===1 && dob2.getDate() <= 19)
{
  console.log('aquarius');
}
//PISCES
else if(dob2.getMonth()===1 && dob2.getDate() >= 20)
{
  console.log('pisces');
}
else
{
  console.log('pisces');
}



/***************
 *IMPROVED CODE*
 ***************/


/*
var dob = prompt('DOB (mm/dd/yyyy): ');

dob = new Date(dob);
var today = new Date();

var birthMonth = dob.getMonth() + 1;
var birthDay = dob.getDate();
var birthYear = dob.getFullYear();

var bd = birthMonth + '/' + birthDay + '/' + today.getFullYear();
bd = new Date(bd);

var age = today.getFullYear() - dob.getFullYear();

if(today.getTime() < bd.getTime())
{
  age--;
}

var sign;

switch(birthMonth)
{
  case 1:
    if(birthDay<20)
    {
      sign = 'Capricorn';
    }
    else
    {
      sign = 'Aquarius';
    }
    break;
  case 2:
    if(birthDay<19)
    {
      sign = 'Aquarius';
    }
    else
    {
      sign = 'Pisces';
    }
    break;
  case 3:
    if(birthDay<21)
    {
      sign = 'Pisces';
    }
    else
    {
      sign = 'Aries';
    }
    break;
  case 4:
    if(birthDay<20)
    {
      sign = 'Aries';
    }
    else
    {
      sign = 'Taurus';
    }
    break;
  case 5:
    if(birthDay<21)
    {
      sign = 'Taurus';
    }
    else
    {
      sign = 'Gemini';
    }
    break;
  case 6:
    if(birthDay<21)
    {
      sign = 'Gemini';
    }
    else
    {
      sign = 'Cancer';
    }
    break;
  case 7:
    if(birthDay<23)
    {
      sign = 'Cancer';
    }
    else
    {
      sign = 'Leo';
    }
    break;
  case 8:
    if(birthDay<23)
    {
      sign = 'Leo';

    }
    else
    {
      sign = 'Virgo';
    }
    break;
  case 9:
    if(birthDay<23)
    {
      sign = 'Virgo';
    }
    else
    {
      sign = 'Libra';
    }
    break;
  case 10:
    if(birthDay<23)
    {
      sign = 'Libra';
    }
    else
    {
      sign = 'Scorpio';
    }
    break;
  case 11:
    if(birthDay<23)
    {
      sign = 'Scorpio';
    }
    else
    {
      sign = 'Sagittarius';
    }
    break;
  case 12:
    if(birthDay<22)
    {
      sign = 'Sagittarius';
    }
    else
    {
      sign = 'Aquarius';
    }
    break;
}

console.log('You are ' + age + ' years old. Your sign is ' + sign + '.');

*/























