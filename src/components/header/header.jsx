import React, {useState} from 'react';
import { MenuItem, Select, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';

const Header = ()=>{
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const ChangeFilter = (event)=>{
        setFilter(event.target.value)
    }

    const ChangeSearch = (event)=>{
        setSearch(event.target.value);
        console.log(event, search);
    }

    return (
        <>
                
                <div className="header" id="header">
                    <Select className="select" value={filter} onChange={ChangeFilter} displayEmpty>
                        <MenuItem value="All">All</MenuItem>
                    </Select>
                    <div className="search_bar">
                        <div>
                            <SearchIcon />
                        </div>
                        <InputBase value={search} onChange={ChangeSearch} placeholder="Search..."/>
                    </div>
                </div>
        </>
    )
};

export default Header;