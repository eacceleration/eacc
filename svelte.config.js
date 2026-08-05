import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    files: {
      assets: 'public'
    },
    paths: {
      base: process.env.BASE_PATH ?? ''
    },
    prerender: {
      handleHttpError: 'fail'
    }
  }
};

export default config;
