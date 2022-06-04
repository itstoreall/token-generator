const { log } = console;

export const connect = {
  app: (wallets, endpoint) => log('app:', wallets[0].name, endpoint),
};
