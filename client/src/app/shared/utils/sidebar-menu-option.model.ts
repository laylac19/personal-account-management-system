export class SidebarMenuOptionModel {
    constructor(
        public icon: string,
        public tooltip: string,
        public action: () => void,
    ) {}
}
