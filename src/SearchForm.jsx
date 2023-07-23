import { contextglobalUser } from "./context";

const App = () => {
  const { setSearchTerm } = contextglobalUser();
  return (
    <section>
      <h1 className="title">Image finder</h1>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          const val = e.target[0].value;
          if (!val) {
            return;
          }
          setSearchTerm(val);
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default App;
