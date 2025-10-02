///** @type {import('next').NextConfig} */
//const nextConfig = {};
//module.exports = nextConfig;

const withMDX = nextMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // ...другие опции next
};

module.exports = withMDX(nextConfig);
