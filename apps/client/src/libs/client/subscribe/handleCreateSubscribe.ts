import axios from 'axios';
import handleRevalidate from '../handleRevalidate';
import { server_host } from '../../../../config/host.config';
import { SubscribeType } from '@client/types';

export default async function handleCreateSubscribe(values: Partial<SubscribeType>) {
  try {
    const url = `${server_host}/api/subscribes`;
    const res = await axios.post(url, {data:values});

    handleRevalidate({
      paths: [],
      tags: ['getSubscribes', 'getDashboard'],
    });

    return res.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data ?? { error: { message: 'Unknown Error' } };
  }
}
