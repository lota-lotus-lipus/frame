import { generate as g } from "random-words";

function _() {
  const a = document.getElementById('msBingFrame');
  let b = 0;

  function c() {
    const d = Math.floor(Math.random() * 10) + 1;
    const e = g(d);

    if (Array.isArray(e)) {
      return e.join(' ');
    } else {
      return e;
    }
  }

  function f() {
    const g_ = c();
    a.src = atob('aHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9') + g_ + atob('JlBDPVUzMTYmZm9ybT1BU0RTQko=');
    const h = Math.floor(Math.random() * 2000) + 8000;

    b++;
    console.log(atob('V2FpdGluZyBmb3IgNCBtaW51dGVzLi4u'), b, atob('JlBDPVUzMTYmZm9ybT1BU0RTQko='), h, 'ms');

    if (b % 3 === 0) {
        console.log(atob('V2FpdGluZyBmb3IgNCBtaW51dGVzLi4u'));
        setTimeout(f, 4 * 60 * 1000); 
    } else if (b < 35) {
        setTimeout(f, h);
    } else {
        console.log(atob('UmVhY2hlZCAzNSBzZWFyY2hlcy4gU3RvcHBpbmcgYW5kIGNsb3NpbmcgdGhlIHRhYi4uLg=='));
        window.close(); 
    }      
  }

  f();
}

_();
