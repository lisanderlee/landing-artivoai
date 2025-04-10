'use client'
const COLORS = {
  black: {
    bg: "#000000",
    text: "#EFF1F3",
  },
  purple: {
    bg: "#632CD0",
    text: "#EFF1F3",
    bg_hover: "#000000",
    text_hover:"#EFF1F3",
  },
  white: {
    bg: "#EFF1F3",
    text: "#000000",
  },
  gray: {
    bg: "#E1E5EE",
    text: "#000000",
  },
};

export default function FlatButton({ text, variant = "purple", url }) {
  const colorScheme = COLORS[variant] || COLORS.purple;
  const hoverStyles = {
    backgroundColor: colorScheme.bg_hover || colorScheme.bg,
    color: colorScheme.text_hover || colorScheme.text,
    transition: 'all 0.1s ease-in-out'
  };
  
  const baseStyles = {
    backgroundColor: colorScheme.bg,
    color: colorScheme.text,
    transition: 'all 0.1s ease-in-out'
  };
  return (
    <a href={url}>
    <div
      className={`rounded-full inline-block px-6 py-3`}
      style={baseStyles}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, baseStyles);
      }}
    >
      <p className="text-md font-medium">{text}</p>
    </div>
  </a>
  );
}



