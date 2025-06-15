import React from 'react'

const HighlightText = ({ text }: { text: string }) => {
  return (
    <span className="bg-gradient-to-r from-[#f74270] via-[#FBA1B7] to-[#e76988] bg-clip-text text-transparent">
        {text}
    </span>
  )
}

export default HighlightText