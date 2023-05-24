import axios from 'axios';
import Config from '../config/config';
import Utils from '../utils/utils';
import ApiEndpoint from '../config/api-endpoint';

const Story = {
  async getAll() {
    return await axios.get(ApiEndpoint.GET_ALL_TRANSACTION, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },
  async store({ description, photo }) {
    const data = { description, photo };

    return await axios.post(ApiEndpoint.STORE_TRANSACTION, data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
export default Story;
