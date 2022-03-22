import { domainRegex } from "./regex";

const checkIfDomain = (address) => domainRegex.test(address);

export default checkIfDomain;