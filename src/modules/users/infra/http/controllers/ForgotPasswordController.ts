import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPassworEmailService from '@modules/users/services/SendForgotPasswordEmailService';

class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const SendForgotPassworEmail = container.resolve(
      SendForgotPassworEmailService,
    );

    await SendForgotPassworEmail.execute({
      email,
    });

    return response.status(204).send();
  }
}

export default ForgotPasswordController;
