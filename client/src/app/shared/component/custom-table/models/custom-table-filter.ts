export class CustomTableFilter {
    id: number;
    field: string;
    type: string;
    label: string;

    constructor(id: number, label: string) {
        this.id = id;
        this.label = label;
    }
}
