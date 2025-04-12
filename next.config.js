/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  transpilePackages: ['undici'],
  webpack: (config) => {
    // Use in-memory caching instead of file system caching
    config.cache = {
      type: 'memory'
    };
    
    config.module.rules.push({
      test: /\.js$/,
      include: [/node_modules\/undici/],
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                node: 'current'
              }
            }]
          ],
          plugins: [
            ['@babel/plugin-proposal-private-methods', { loose: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
          ]
        }
      }
    });
    return config;
  }
};

module.exports = nextConfig;