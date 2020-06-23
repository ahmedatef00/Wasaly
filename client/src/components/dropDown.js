import React, { useState, useEffect } from 'react'
import './search.css';
import { Link } from "react-router-dom";


const DropDown = (props) => {
    const [options, setOptions] = useState(props.options)
    const { searchInput } = props
    const { handleChange } = props
    const { fieldName } = props
    const { to } = props

    useEffect(() => {
        setOptions(props.options)
    }, [props.options])

    return (
        <div className="dropdown">
            <input type="text" value={searchInput} onChange={handleChange} />
            {
                options.length >= 1 &&
                <div className="dropdown-content">
                    {options.map((option) => {
                        return (
                            <div className="suggestion">
                                <Link style={{ textDecoration: "none", color:"black" }}
                                to={{
                                    pathname: `/search/${option[fieldName]}`,                                    
                                    state: { products: options }
                                }}
                                onClick={()=>setOptions('')}
                                >
                                    {option[fieldName]}

                                </Link>
                            </div>)
                    }
                    )}
                </div>
            }
        </div>
    )

}
export default DropDown


// to={to}