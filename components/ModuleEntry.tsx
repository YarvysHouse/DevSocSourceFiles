import styles from './accordion/accordion.module.css';

interface ModuleEntryProps {
  code: string;
  name: string;
  href?: string;
  shortCode?: string;
  semester?: string;
  description: string;
}

export default function ModuleEntry({
  code,
  name,
  href,
  shortCode,
  semester,
  description,
}: ModuleEntryProps) {
  return (
    <div className={styles.moduleEntry}>
      <div className={styles.moduleHeader}>
        <span className={styles.moduleCode}>{code}</span>
        <span className={styles.moduleName}>
          {href ? <a href={href}>{name}</a> : name}
        </span>
        {shortCode && <span className={styles.moduleMeta}>{shortCode}</span>}
        {semester && <span className={styles.moduleMeta}>{semester}</span>}
      </div>
      <p className={styles.moduleDesc}>{description}</p>
    </div>
  );
}