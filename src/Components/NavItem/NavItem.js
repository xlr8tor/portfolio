const NavItem = (ListClassName, href, size) => {
  return (
    <li
      className={ListClassName}
      onClick={() => {
        ToggleMenu();
      }}
    >
      <a href="#home" className="nav__link">
        <UilEstate size={size} />
        Home
      </a>
    </li>
  );
};

export default NavItem;
