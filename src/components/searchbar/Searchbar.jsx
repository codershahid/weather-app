import styles from "./Searchbar.module.scss";

const Searchbar = ({ updateCity, city }) => {
  return (
    <div className={styles.searchbar}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const city = formData.get("city");
          updateCity(city);
        }}
      >
        <label htmlFor="city">
          <span>City:</span>
          <input type="text" id="city" name="city" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Searchbar;
