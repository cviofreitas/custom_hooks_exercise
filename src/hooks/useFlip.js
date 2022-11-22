import React, { useState } from 'react'

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(true)
    const flip = () => {
        setIsFlipped(flipped => !flipped)
    }
    return [isFlipped, flip];
}

export default useFlip