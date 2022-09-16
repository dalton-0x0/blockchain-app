export const shortenAddress = (address) =>
  `${address.slice(0, 4)}-xxxx-xxxx-xxxx-${address.slice(address.length - 4)}`;
