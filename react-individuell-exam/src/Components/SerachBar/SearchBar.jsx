import "./searchBar.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

function SearchBar({ search, setSearch }) {
  return (
    <section className="search-bar">
      <i className="las la-search"></i>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;