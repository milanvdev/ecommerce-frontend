import SearchInput from "../../common/searchInput.jsx";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-6 shadow-custom-light">
            <SearchInput placeholder="Search something here"/>
        </header>
    )
}
export default Header;
