const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div
      className="square"
      style={{
        backgroundColor: colorValue || "transparent",
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <p>{colorValue || "Empty Value"}</p>
      <p>{hexValue || null}</p>
    </div>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
