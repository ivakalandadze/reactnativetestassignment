const left = (string) => {
  let a = string;
  let b = [];
  let c = "";
  let d = [];
  let e = [];
  for (let i = 0; i < string.length; i++) {
    b.push(string[i]);
  }
  for (let j = 0; j < b.length; j++) {
    for (let k = 0; k < b.length; k++) {
      c += b[k];
    }
    e.push(c);
    d = b.shift();
    b.push(d);
    c = ""
  }
  return e;
}

console.log(left("abc"));
