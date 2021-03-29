const hitung = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      a > 0 ? resolve(a + b) : reject("a nya kurang");
    }, 2000);
  });
};

let a = hitung(6, 9);

const add9 = (a) => {
  return a + 9;
};
//cara mengaksesnya cara pertama
a.then((a) => add9(a))
  .then((a) => console.log(24))
  .catch((err) => console.log(err));

//cara mengakses promise dengan asycronus
const hitung1 = async (a, b) => {
  try {
    let c = await hitung(a, b);
    return c;
  } catch (error) {
    console.log(error);
  }
};

hitung1(8, b)
  .then((a) => console.log(a))
  .catch((err) => console.log(err));
