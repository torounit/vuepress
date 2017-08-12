import WPAPI from 'wpapi';
import config from './config'
export const wp = new WPAPI({
  endpoint: new URL(config.root).pathname,
  nonce: config.nonce
});
export default wp;
