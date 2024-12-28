/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pcpc1.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "sindhudurg-p.s3.amazonaws.com",
      },
    ],
  },
  //   async headers() {
  //     return [
  //       {
  //         source: "/(.*)", // Apply headers to all routes
  //         headers: [
  //           {
  //             key: "X-XSS-Protection",
  //             value: "1; mode=block",
  //           },
  //           {
  //             key: "X-Content-Type-Options",
  //             value: "nosniff",
  //           },
  //             {
  //               key: "Referrer-Policy",
  //               value: "strict-origin-when-cross-origin",
  //             },
  //             {
  //               key: "Access-Control-Allow-Origin",
  //               value:
  //                 "https://csn.mahapolice.gov.in, https://csn.dreamcaredevelopers.com",
  //             },
  //             {
  //               key: "Access-Control-Allow-Methods",
  //               value: "GET, POST, PUT, DELETE, OPTIONS",
  //             },
  //             {
  //               key: "Access-Control-Allow-Headers",
  //               value: "X-Requested-With, Content-Type, Authorization",
  //             },
  //         ],
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;
