export default function getFullResponseFromAPI(success) {
  const promiseA = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({status: 200, body: 'Success'});
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  return promiseA;
}
