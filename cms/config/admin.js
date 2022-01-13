module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ce636c9aece3d1fe1859c168f46256e3'),
  },
});
