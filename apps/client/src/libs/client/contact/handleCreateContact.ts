import axios from 'axios';
import handleRevalidate from '../handleRevalidate';
import { server_host } from '../../../../config/host.config';
import { ContactType } from '@client/types';

export default async function handleCreateContact(values: Partial<ContactType>) {
  try {
    const url = `${server_host}/api/contacts`;
    const res = await axios.post(url, { data: values });

    handleRevalidate({
      paths: [],
      tags: ['getContacts', 'getDashboard'],
    });

    return res.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data ?? { errors: [{ message: 'Unknown Error' }] };
  }
}
