module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ed18da5750fbff1e390801f23d500566'),
  },
});
