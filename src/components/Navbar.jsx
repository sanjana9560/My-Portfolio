const Navbar = () => {
  return (
    <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000" id="navbar">
      <div className="leftNav">Portfolio</div>
      <div className="rightNav">
        <a href="#home" className="nav_item">Home</a>
        <a href="#experience" className="nav_item">Experience</a>
        <a href="#skill" className="nav_item">Skill</a>
        <a href="#project" className="nav_item">Project</a>
        <a href="#contact" className="nav_item">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
