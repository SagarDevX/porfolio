import React from 'react'

const BottomBlur = () => {
    return (
        <div
            className="fixed bottom-0 inset-x-0 h-16 pointer-events-none z-50"
            style={{
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(0px)",
                maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            }}
        />
    )
}

export default BottomBlur