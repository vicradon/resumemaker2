import Head from "next/head";
const FAVICON_FOLDER = "/favicons";

const origin = "https://orange-dune-006c89910.2.azurestaticapps.net/";

export default function Meta({
  title = `Resume Maker: A website to create your resume in minutes with PDF export`,
  description = `Resume Maker is a website to create your resume in minutes with PDF export. It's free and open source.`,
  image = `${origin}/thumbnail.png`,
  imageAlt = "OG image AnonMsg application",
  canonical = `${origin}`,
}: {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  canonical?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${FAVICON_FOLDER}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${FAVICON_FOLDER}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${FAVICON_FOLDER}/favicon-16x16.png`}
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href={`${FAVICON_FOLDER}/safari-pinned-tab.svg`}
        color="#11A380"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${origin}/logo.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Vercel" />
      <meta name="twitter:creator" content="@dom__inic" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={imageAlt} />
    </Head>
  );
}
