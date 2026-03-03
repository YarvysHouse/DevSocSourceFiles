import styles from './data-table.module.css';
import { type ReactNode } from 'react';

interface Column {
  key: string;
  label: string;
  render?: (value: string, row: Record<string, string>) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, string>[];
  scrollable?: boolean;
}

export default function DataTable({ columns, data, scrollable = true }: DataTableProps) {
  return (
    <div className={styles.wrapper}>
      <div className={scrollable ? styles.scrollable : undefined}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {columns.map((col) => (
                  <td key={col.key} className={col.key === 'year' ? styles.yearCell : undefined}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}