export default {
  key: 'UserReport',
  options: {
    delay: 5000,
    attempts: 3, /* NUMERO DE TENTATIVA */
  },
  async handle({ data }) {
    const { user } = data;

    console.log(user);
  },
};