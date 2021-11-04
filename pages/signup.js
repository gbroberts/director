// Third-party modules

// Nextjs/Framework modules

// Custom components
import Brand from "../components/branding"
import Navbar from "../components/navbar";

export default function Home() {
  // React fragment = <></>   Used to be <React.Fragment></React.Fragment>
  // Used to add no additional markup around your content
  // Normally need to use {} to pass params, but strings are an exception that don't need {}
  return (
    <>
        <Navbar/>
        <Brand title="Sign Up Page" tagline="sign up for the app"/>
    </>
  )
}
