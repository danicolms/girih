const Shape = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
      }}
      viewBox="0 0 1 2"
      {...props}
    >
      <path
        d="m0 1.8 1-.5"
        style={{
          fill: "none",
        }}
        transform="translate(0 -.2)"
      />
      <path
        d="m0 1.8 1-.5"
        style={{
          fill: "none",
        }}
        transform="translate(0 -.9)"
      />
      <path
        d="m0 .7.2.1V2"
        style={{
          fill: "none",
        }}
        transform="matrix(1 0 0 .84615 0 .308)"
      />
      <path
        d="m1 1.3-.2-.1V0"
        style={{
          fill: "none",
        }}
        transform="translate(0 -.2)"
      />
    </svg>
  );
};
export default Shape;
