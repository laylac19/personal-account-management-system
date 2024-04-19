export class EntitiesUtil {
  constructor(
    public id: number,
    public description: string
  ) {
  }

  public static readonly PROJETO = new EntitiesUtil(1, 'Projeto');
  public static readonly USUARIO = new EntitiesUtil(2, 'Usuário');
}
