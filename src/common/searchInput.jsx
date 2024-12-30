import SearchIcon from "../assets/svg/searchIcon.svg?react"

const SearchInput = ({placeholder}) => {
    return (
        <div className="flex items-center border border-alto rounded-xl p-2 w-80 bg-white">
            <SearchIcon className="mr-3"/>
            <input
                type="text"
                placeholder={placeholder}
                className="flex-1 font-inter-regular text-base  focus:outline-none bg-transparent text-dusty-gray"
            />
        </div>
    )
}
export default SearchInput;
