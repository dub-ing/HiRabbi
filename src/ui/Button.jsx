function Button({ children, bgColor, width, color }) {
  console.log(bgColor);

  return (
    <button
      class={`${width} ${bgColor} py-3 rounded-md text-sm ${color} font-medium`}
    >
      {children}
    </button>
  );
}

export default Button;
