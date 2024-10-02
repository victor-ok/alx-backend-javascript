export default function handleResponseFromAPI(promise) {
  return promise.then(
    () => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    },
    () => {
      throw Error();
    },
  ).catch((e) => e);
}
