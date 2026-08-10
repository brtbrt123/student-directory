import StudentCard from './StudentCard';
import styles from './StudentDirectory.module.css';

export default function StudentDirectory({ students }) {
  return (
    <div className={styles.directoryContainer}>
      <h1 className={styles.title}>Student Directory</h1>
      <div className={styles.grid}>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}