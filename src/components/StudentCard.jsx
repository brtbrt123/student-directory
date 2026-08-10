import styles from './StudentCard.module.css';

// Make sure 'export default' is right here before function:
export default function StudentCard({ student }) {
  const { name, course, yearLevel, status, gwa } = student;

  const isDeansLister = gwa <= 1.75;
  const isOnProbation = status === 'On Probation';

  const cardClassName = `${styles.card} ${isOnProbation ? styles.probation : ''}`.trim();

  return (
    <div className={cardClassName}>
      {isDeansLister && (
        <span className={styles.badge}>
          Dean's Lister
        </span>
      )}
      
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.info}><strong>Course & Year:</strong> {course} - Year {yearLevel}</p>
      <p className={styles.info}>
        <strong>Status:</strong>{' '}
        <span className={isOnProbation ? styles.statusProbationText : ''}>
          {status}
        </span>
      </p>
      <p className={styles.info}><strong>GWA:</strong> {gwa.toFixed(2)}</p>
    </div>
  );
}