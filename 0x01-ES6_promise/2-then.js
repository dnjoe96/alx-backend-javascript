export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API to the console');
    return { status: 200, body: 'success' };
  }).catch(() => {
    return new Error();
  })
}
