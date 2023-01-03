for(var i=0;i<3;i++)
{ 
    setTimeout(function(){
        console.log(i);
    },i);
}

console.log(typeof[1,2,3].sort);
console.log(typeof[]); 
console.log(typeof[1,2,3]);
console.log(typeof[1,2,3].length)

var a = fn("abc", "abcdef"); // a=0 
var b = fn("bc","abcdef"); // b=1 
var c = fn("g","abcdef"); // c=null
console.log(a);
console.log(b);
console.log(c);

function fn(sub, string){
    if(string.includes(sub)) return string.indexOf(sub); else return null;
}



import React, {useEffect, useState} from 'react';
function Car(props) {
    const [defCar, setDefCar] = useState({name: "x5", brand: "bmw"});
    useEffect( () => {
        async function fetchData()
        {
             var data = await fetch('/data');
             data = await data.json();
             setDefCar(data);
}
        fetchData();
    }, [props]);
    return (
        <div className={class}>
        </div>
); }
export default Car;


//modul.js
exports.fn = function(n) {
    return n + "";
  }
  //const fn = require('./modul.js').fn;
  //fn(10);


  
  function addA(param) {
    return new Promise((resolve, reject) => {
    try {
    resolve(param + 'a');
    } catch (error) { reject(error);
    } })
    }
    function add2(param) {
    return new Promise((resolve, reject) => {
    try {
    resolve('2' + param);
    } catch (error) { reject(error);
    } })
    }
    addA('sk').then((res) => { return add2(res);
    }).then((res) => { console.log(res);
    });




    describe('End 2 end testing and MOCHA', () => {
        describe('register method', () => {
          it('Register user testing', (done) => {
            chai
              .request(host)
              .post('/auth/register')
              .set('content-type', 'application/json')
              .send({
                email: 'testbbb@russia.eu',
                password: 'Soky11@',
                name: 'Bernald',
                age: 42,
                height: 142,
              })
              .end((error, response) => {
                if (error) {
                  console.log(error);
                }
                response.should.have.status(200);
                response.should.be.a('object');
                userId = response.body.id;
                done();
              });
          });
        });




        // timers: faza spustajuca callbacky setTimeout() a setInterval().
        // pending callbacks: faza spustajuca callback operacie I/O pre dalsie iteracie. idle:
        // prepare: priprava spracovania
        // poll:
        // check: setImmediate() kontrola callbackov.
        //close callbacks: zatvaranie callbackov napr pri zatvarani socketov.
    