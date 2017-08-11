import WPAPI from 'wpapi';

export const wp = new WPAPI({endpoint: '/wp-json/'});
export default wp;
