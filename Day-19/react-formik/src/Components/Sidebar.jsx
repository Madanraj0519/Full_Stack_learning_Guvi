import React from "react";

function Sidebar() {
  return (
    <>
    <div className="container shadow-lg bg-info m-0 p-0 pt-4 sticky-left rounded-start" style={{ width: '250px' }}>
        <header>
          <h1>SideBar</h1>
        </header>
        <section className="d-flex flex-column justify-content-start align-items-center">
          <ul>
            <p>Order By</p>
            <li>Books</li>
            <li>Authors</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Sidebar;