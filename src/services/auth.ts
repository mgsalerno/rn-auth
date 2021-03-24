interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jandfaue9pw78thq87ht84nfw79twhg8efn7w9t0u3tj3',
        user: {
          name: 'name',
          email: 'name@mail.com'
        }
      });
    }, 2000)
  });
}