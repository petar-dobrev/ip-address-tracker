import { domainRegex, ipRegex } from "./regex";

export const isValidDomain = (address) => domainRegex.test(address);

const isValidIp = (address) => ipRegex.test(address);

export const isValidAddress = (address) => {
  return isValidDomain(address) || isValidIp(address);
};
