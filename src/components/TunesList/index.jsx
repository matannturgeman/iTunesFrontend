import React from 'react'
import TunePreview from '../TunePreview'

const TunesList = props => {
    const { tunes } = props
    console.log('tunes', tunes)
    if(!Array.isArray(tunes)) return null;
    return (
        <div>
            {
                tunes.map((tune, i) => (
                    <TunePreview tune={tune} key={i} />
                ))
            }
        </div>
    )

}

export default TunesList