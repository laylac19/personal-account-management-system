export class ModalTitleEnum {

  private constructor(
    public id: number,
    public header: string,
  ) {
  }

  static readonly NEW = new ModalTitleEnum(0, 'Novo');
  static readonly VIEW = new ModalTitleEnum(1, 'Visualizar Dados');
  static readonly EDIT = new ModalTitleEnum(2, 'Editar');
  static readonly DELETE = new ModalTitleEnum(3, 'Excluir');
  static readonly ADVANCE = new ModalTitleEnum(4, 'Avançar Etapa');
  static readonly CONCLUDE = new ModalTitleEnum(5, 'Concluir');

  static values = [
    ModalTitleEnum.NEW,
    ModalTitleEnum.VIEW,
    ModalTitleEnum.EDIT,
    ModalTitleEnum.DELETE,
    ModalTitleEnum.ADVANCE,
    ModalTitleEnum.CONCLUDE
  ];

  static getById(index: number): ModalTitleEnum | any {
    return ModalTitleEnum.values.find(titulo => titulo.id === index);
  }

  static setTitle(id: number): ModalTitleEnum {
    return ModalTitleEnum.getById(id);
  }

}
