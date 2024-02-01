export type TeamType = {
  fillName: string;
  occupation: string;
  image?: string
}

export type SubscribeType = {
  email: string
}

export type PortfolioType = {
  title: string;
  link: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type ContactType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
export type CategoryType = {
  name: string;
  slug: string;
}

export type ImageType = {
  name: string;
  size: number;
  url: string;
  formats: {
    large?: {
      name: string;
      size: number;
      url: string;
    },
    small?: {
      name: string;
      size: number;
      url: string;
    },
    medium?: {
      name: string;
      size: number;
      url: string;
    },
    thumbnail?: {
      name: string;
      size: number;
      url: string;
    }
  },
}
export type BlogType = {
  title: string;
  description: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type TestimonyType = {
  name: string;
  occupation: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


export type StrapiContent<T> = {
  id: number;
  attributes: T;
}


export type StrapiResponse<T> = {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
