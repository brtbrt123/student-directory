import { useState } from 'react';
import styles from './StudentForm.module.css';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      name,
      course,
      yearLevel: Number(yearLevel),
      status,
      gwa: parseFloat(gwa),
    };

    onAdd(newStudent);

    // Clear all fields
    setName('');
    setCourse('');
    setYearLevel('');
    setStatus('Regular');
    setGwa('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Add New Student</h2>

      <input
        className={styles.input}
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Course (e.g. BSCS)"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="number"
        placeholder="Year Level"
        value={yearLevel}
        onChange={(e) => setYearLevel(e.target.value)}
        min="1"
        max="6"
        required
      />

      <select
        className={styles.input}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Regular">Regular</option>
        <option value="Irregular">Irregular</option>
        <option value="On Probation">On Probation</option>
      </select>

      <input
        className={styles.input}
        type="number"
        placeholder="GWA (e.g. 1.75)"
        value={gwa}
        onChange={(e) => setGwa(e.target.value)}
        step="0.01"
        min="1.00"
        max="5.00"
        required
      />

      <button type="submit" className={styles.button}>Add Student</button>
    </form>
  );
}
