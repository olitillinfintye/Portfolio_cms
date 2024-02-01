const server_host =
  process.env.SERVER_HOST ?? 'http://localhost:1337';

const client_host =
  process.env.CLIENT_HOST ?? 'http://localhost:3000';

export { server_host, client_host };
