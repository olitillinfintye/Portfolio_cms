import axios from 'axios';

export default async function handleRevalidate({
  tags,
  paths,
}: {
  tags?: string[];
  paths?: string[];
}) {
  try {
    const url = `/api/revalidate`;
    const params = new URLSearchParams();
    paths?.forEach((path) => {
      params.set('path', path);
    });
    tags?.forEach((tag) => {
      params.set('tag', tag);
    });
    const res = await axios.get(url, { params: params });

    return res.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data ?? { errors: [{ message: 'Unknown Error' }] };
  }
}
