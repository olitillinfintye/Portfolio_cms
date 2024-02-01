import axios from 'axios';
import { client_host } from '../../config/host.config';

export default async function handleRevalidate({
  tags,
  paths,
}: {
  tags?: string[];
  paths?: string[];
}) {
  try {
    const url = `${client_host}/api/revalidate`;
    const params = new URLSearchParams();
    paths?.forEach((path) => {
      params.set('path', path);
    });
    tags?.forEach((tag) => {
      params.set('tag', tag);
    });
    
    const res = await axios.get(url, { params: params });

  } catch (error: any) {
    console.log(error);
  }
}
