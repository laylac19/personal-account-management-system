export class CustomTableButton<T> {
  icon: string;
  description: string;
  action: (row: T) => void;
  permission?: boolean;
  typeBtn?: string;
  typeTable?: string;
}
