import { SearchIcon } from "./SearchIcon"
export const SearchInput = ({search, onPressEnter, onChangeText}) => {
    return(
        <div className="ml-20 flex px-4 py-3 rounded-md overflow-hidden max-w-md mx-auto font-[sans-serif]">
            <SearchIcon />
            <input
            type="text"
            placeholder="Search City..."
            className="border-none outline-none p-2 w-64 rounded-lg text-black"
            value={search}
            onChange={onChangeText}
            onKeyDown={onPressEnter}
            />
            </div> 
 
    )
}