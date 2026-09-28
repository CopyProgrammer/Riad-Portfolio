import Header from "../ui/Header/Header";

const Layout = ({children}) => {

  return (
    <>
      <Header />
      {children}
    </>
  )
}
export default Layout;
