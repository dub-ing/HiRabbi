function Title({children, color, size, font}) {
  return <h2 class={`text-${color} text-${size} font-${font}`}>{children}</h2>;
}

export default Title;
