import { v4 as uuid } from 'uuid';

import IUserTokensRepository from '../IUserTokensRepository';
import UserToken from '../../infra/typeorm/entities/UserToken';

class FakeUserTokenRepository implements IUserTokensRepository {
  private tokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: Date.now(),
      updated_at: Date.now(),
    });

    this.tokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = this.userTokens.find(
      findToken => findToken.token === token,
    );

    return userToken;
  }
}

export default FakeUserTokenRepository;
