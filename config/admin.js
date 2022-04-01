module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac256289b9de2e6fff269076da0f9736'),
  },
});
