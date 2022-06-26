// function signUpUser(firstName, lastName) {
// }
// That returns a resolved promise with this object:

// {
//   firstName: value,
//   lastName: value,
// }

export default function signUpUser(firstName, lastName) {
  const promise = new Promise((resolve) => {
    resolve({ firstName, lastName });
  });

  return promise;
}
