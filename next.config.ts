/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // 前端的请求路径
        destination: "http://127.0.0.1:8000/api/:path*", // 后端的真实路径
      },
    ];
  },
};

module.exports = nextConfig;
