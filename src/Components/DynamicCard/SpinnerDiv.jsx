import { Spinner } from "react-bootstrap";
function SpinnerDiv() {
  return (
    <div style={{ textAlign: "center" }}>
      <Spinner animation="grow" variant="dark" style={{ margin: "5px" }} />
      <Spinner animation="grow" variant="dark" style={{ margin: "5px" }} />
      <Spinner animation="grow" variant="dark" style={{ margin: "5px" }} />
    </div>
  );
}

export default SpinnerDiv;
