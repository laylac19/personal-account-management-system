import {Table} from 'primeng/table';
import {DefaultFilter} from './default-filter';

export class CustomTableUpdateEvent {
    table: Table;
    filter?: DefaultFilter;
}
