export class TableActionButtonEnum {

  private constructor(
    public id: number,
    public header: string,
    public icon?: string
  ) {
  }

  static readonly NEW = new TableActionButtonEnum(0, 'Cadastrar');
  static readonly VIEW = new TableActionButtonEnum(1, 'Visualizar Dados');
  static readonly EDIT = new TableActionButtonEnum(2, 'Editar');
  static readonly DELETE = new TableActionButtonEnum(3, 'Excluir', 'bi bi-trash-fill');
  static readonly ADVANCE = new TableActionButtonEnum(4, 'Avançar Etapa', 'bi bi-skip-forward-fill');
  static readonly CONCLUDE = new TableActionButtonEnum(5, 'Concluir', 'bi bi-check-circle-fill');
  static readonly ACTIVE = new TableActionButtonEnum(5, 'Ativar', 'bi bi-unlock-fill');

  static values = [
    TableActionButtonEnum.NEW,
    TableActionButtonEnum.VIEW,
    TableActionButtonEnum.EDIT,
    TableActionButtonEnum.DELETE,
    TableActionButtonEnum.ADVANCE,
    TableActionButtonEnum.CONCLUDE
  ];

  static getById(index: number): TableActionButtonEnum | any {
    return TableActionButtonEnum.values.find(titulo => titulo.id === index);
  }

  static setAction(id: number): TableActionButtonEnum {
    return TableActionButtonEnum.getById(id);
  }

}
