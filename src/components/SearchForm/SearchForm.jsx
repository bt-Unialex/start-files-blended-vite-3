import styles from './SearchForm.module.css';
import { FiSearch } from 'react-icons/fi';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSubmit }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.region.value;
    if (value === 'default') return;
    // console.log(' handleSubmit value:', value);

    onSubmit(value);
  }

  return (
    <>
      <h2>SearchForm</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <select
          aria-label="select"
          className={styles.select}
          name="region"
          required
          defaultValue="default"
        >
          <option disabled value="default">
            Select a region
          </option>
          {regions.map(r => (
            <option key={r.id} value={r.value}>
              {r.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default SearchForm;
