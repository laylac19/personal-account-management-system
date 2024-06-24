export class CustomTableColumn {
    header: string;
    field: string;
    classStyle?: string;
    disableSort?: boolean;
    sortField?: string;
    columnWidth?: number;
    type?: string;
    pipe?: string;
    columnUpdated? = false;
    hide?: boolean;
    visible?: boolean;
    roles?: string[] = [];
    opcao?: any = {};
}
