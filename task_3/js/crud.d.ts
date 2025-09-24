import { RowID, RowElement } from './interface';

// Ambient type declarations for crud functions
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

declare module './crud' {
  export { insertRow, deleteRow, updateRow };
}