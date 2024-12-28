import { Html, Head, Main, NextScript } from "next/document";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Inter&family=Playfair+Display&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gasoek+One&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@500&family=Noto+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {/* <script
          async
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-E6013V3W2V"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E6013V3W2V', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
      </Head>

      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
