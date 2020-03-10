import React, { useState, useEffect } from 'react'
import CollectionPreview from '../CollectionPreview'

const CollectionsList = props => {
    const { collections } = props
    if(!Array.isArray(collections)) return null;
    return (
        <div>
            {
                collections.map(collection => (
                    <CollectionPreview collection={collection} />
                ))
            }
        </div>
    )

}

export default CollectionsList