import page from "./pageNotFound.png";
import page2 from "./PageNotFound2.png";
function PageNotFound() {
  return (
    <div style={{ textAlign: "center", margin: "10px auto", minHeight: '76vh' }}>
      <img src={page2} alt="Page Not Found" width="50%" />
    </div>
  );
}

export default PageNotFound;
