import Home from "../pages/Home";
import User from "../pages/user";
import { Link } from "react-router-dom";

 const Navbar = () => {
  // const currentuser=User()
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary data-bs-theme=dark" data-bs-theme="dark" >
  <div className="container-fluid ">
    <a className="navbar-brand fw-bold fs-5" href="#">ZAP <span className="badge text-bg-danger fs-5">MARKET</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active fw-medium"  aria-current="page"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-medium"  href="/product">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-medium" href="/cart">Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-medium" href="/Login">Login</a>
        </li>
         {/* <li className="nav-item">
          <a className="nav-link active" href="#">user:{currentuser?.email}</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
       
       


    </div>
  )
}
export default Navbar;

// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav
//       className="navbar navbar-expand-lg bg-body-tertiary"
//       data-bs-theme="dark"
//     >
//       <div className="container-fluid">

//         {/* Logo */}
//         <Link className="navbar-brand fw-bold fs-5" to="/">
//           ZAP <span className="badge text-bg-danger fs-6">MARKET</span>
//         </Link>

//         {/* Toggle Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
          
//           {/* Left side links */}
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link fw-medium" to="/">
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link fw-medium" to="/product">
//                 Product
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link fw-medium" to="/cart">
//                 Cart
//               </Link>
//             </li>
//           </ul>

//           {/* Right side (Login) */}
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link fw-medium" to="/login">
//                 Login
//               </Link>
//             </li>
//           </ul>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;