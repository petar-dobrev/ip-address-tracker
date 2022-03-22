import { ipRegex } from "./regex";
import checkIfDomain from "./checkIfDomain";

const checkIfDomainOrIp = (address) => {
  return checkIfDomain(address) || ipRegex.test(address);
};

export default checkIfDomainOrIp;
