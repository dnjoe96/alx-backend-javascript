// function signUpUser(firstName, lastName) {
// }
// That returns a resolved promise with this object:

// {
//   firstName: value,
//   lastName: value,
// }

export default function signUpUser(firstName, lastName) {
  const promise = new Promise((resolve) => {
    resolve({ firstname: firstName, lastName });
  });

  return promise.then((obj) => { console.log(obj); });
  // return resp;
}
