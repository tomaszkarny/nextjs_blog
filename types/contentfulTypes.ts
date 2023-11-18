export type ImageFile = {
  contentType: string;
  details: {
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  url: string;
};

export type DirectImageDetails = ImageFile & { 
  title: string;
  description?: string; 
  file?: ImageFile; 
};


export type Author = {
  name: string;
  picture: DirectImageDetails;
  fields?: {
    name: string;
    picture: DirectImageDetails;
  };
};




export type PostProps = {
  title: string;
  slug?: string;
  date: string;
  content: any; 
  author: Author;
  excerpt?: string;
  coverImage?: DirectImageDetails | null;
  embedUrl?: string;
};

export type Post = {
  fields: PostProps;
};
