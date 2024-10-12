import * as bcrypt from 'bcrypt';

export class Password {
  private saltRounds: number;

  constructor(saltRounds: number = 10) {
    this.saltRounds = saltRounds;
  }

  async generateHash(senha: string): Promise<string> {
    return await bcrypt.hash(senha, this.saltRounds);
  }

  async compareHash(senhaInformada: string, senhaArmazenada: string): Promise<boolean> {
    return await bcrypt.compare(senhaInformada, senhaArmazenada);
  }
}