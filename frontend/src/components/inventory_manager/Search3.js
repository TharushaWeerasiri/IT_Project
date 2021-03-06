import React, { useState } from 'react'

const Search3 = ({history}) => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if(keyword.trim()) {
            history.push(`/all_supplies/${keyword}`)
        } else {
            history.push('/')
        }
    }


    return (
        <form onSubmit={searchHandler} className="search_Thiran">
            <div>
                <input
                    type="text"
                    id="inventory_search_field"
                    placeholder="Enter supplier ID..."
                    onChange={(e) => setKeyword(e.target.value)}
                    className="searchBox_Thiran"
                />
            </div>
            
        </form>
    )
}

export default Search3;
