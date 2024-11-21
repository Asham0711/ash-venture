import React from 'react'

const HighlightText = ({ text }: { text: string }) => {
  return (
    <span className="bg-gradient-to-r from-[#5F0FFF] via-[#A909FF] to-[#E88DEA] bg-clip-text text-transparent">
        {text}
    </span>
  )
}

export default HighlightText