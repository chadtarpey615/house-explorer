import React, {useState} from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="container flex justify-center mt-5">
            <div className="w-1/2">
                <input 
                    type="text" 
                    className="w-full p-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-indigo-500"
                    placeholder="Search for a property"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
        </div>
    )

}

export default SearchBar;