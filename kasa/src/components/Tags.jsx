import React from 'react'
import '../styles/Tags.css'

const Tags = ( { tags } ) =>
{
    
    return (
        <div>
            <ul className="tags">
                { tags.map( ( tag, index ) => 
                    <li className="tagText" key={index}>{ tag }</li>
                    ) }
            </ul>
        </div>
    )
}

export default Tags