type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <><h1>Slug: HoleText {params.slug}</h1><p>Welcome To HCM</p></>;
}
