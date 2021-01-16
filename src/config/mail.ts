interface IMailConfig {
  driver: 'ethereal' | 'gmail';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'helitno.oliveira88@gmail.com',
      name: 'Héliton Space Squad',
    },
  },
} as IMailConfig;
