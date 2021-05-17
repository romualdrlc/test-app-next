import "../styles/reset.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Homepage</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blog/first-article">artile 1</Nav.Link>
          <Nav.Link href="/blog/second-article">article 2</Nav.Link>
        </Nav>
      </Navbar>
      <Component {...pageProps} />
    </div>
  );
}
