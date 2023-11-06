import { useState } from "react";
import styles from "./Form.module.scss";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form(props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    console.log(formData);
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    console.log("Search term submitted:", formData.searchterm);
    //pass the searchterm to moviesearch prop, which is apps getMovie function
    props.handleSearch(formData.searchterm);
  };

  //The component must return some JSX
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>ReelQuest</h1>

      <form onSubmit={handleSubmit}>
        <a href="/">↻</a>
        <input
          className={styles.SearchBar}
          placeholder="Search for movies"
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <button type="submit" value="search" className={styles.inputBtn}>
          Search
        </button>
      </form>
    </div>
  );
}
