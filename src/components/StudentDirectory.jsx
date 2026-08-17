import StudentCard from './StudentCard';
import styles from './StudentDirectory.module.css';

export default function StudentDirectory({ students }) {
  return (
    <div className={styles.directoryContainer}>
      {students.length === 0 ? (
        <p className={styles.noResults}>No students match your search or filter.</p>
      ) : (
        <div className={styles.grid}>
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}