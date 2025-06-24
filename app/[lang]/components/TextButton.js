'use client'
import { ChevronRight } from 'lucide-react'

const COLORS = {
  black: {
    text: '#000000',
    text_hover: '4D4D4D',
  },
  purple: {
    text: '#632CD0',
    text_hover: '#000000',
  },
  white: {
    text: '#EFF1F3',
    text_hover: '#666B72',
  },
}

export default function TextButton({ text, variant = 'purple', url }) {
  const colorScheme = COLORS[variant] || COLORS.purple
  const hoverStyles = {
    color: colorScheme.text_hover || colorScheme.text,
    transition: 'all 0.1s ease-in-out',
  }

  const baseStyles = {
    color: colorScheme.text,
    transition: 'all 0.1s ease-in-out',
  }
  return (
    <a
      href={url}
      className={`inline-block cursor-pointer whitespace-nowrap`}
      style={baseStyles}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyles)
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, baseStyles)
      }}
    >
      <div className="flex flex-row items-center">
        <p className="text-md inline-block font-semibold">{text}</p>
        <div className="items-center">
          <ChevronRight className="mt-0.5" size={18} strokeWidth={2.5} />
        </div>
      </div>
    </a>
  )
}
