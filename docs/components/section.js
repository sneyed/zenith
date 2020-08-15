const Section = ({ title = "Section", children }) => (
  <>
    <h2>{title}</h2>
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        flexGrow: "none",
      }}
    >
      {children}
    </div>
  </>
);

export default Section;
