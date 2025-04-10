

const COLORS = {
  black: {
    bg: '#000000',
    text: '#EFF1F3'
  },
  purple: {
    bg: '#632CD0',
    text: '#EFF1F3'
  },
  white: {
    bg: '#EFF1F3',
    text: '#000000'
  },
  gray: {
    bg: '#E1E5EE',
    text: '#000000'
  }
};

export default function Flag({ text, variant = 'purple' }) {
  const colorScheme = COLORS[variant] || COLORS.purple;

  return (
    <div 
      className={`rounded-full inline-block px-5 py-1`}
      style={{
        backgroundColor: colorScheme.bg,
        color: colorScheme.text,
      }}
    >
   <p className="text-md font-medium">
      {text}
      </p>
    </div>
  );
}



