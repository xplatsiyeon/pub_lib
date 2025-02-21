import classes from "./MenuItems.module.scss";

const MenuItems = ({ menus }) => {
  return (
    <ul className={classes.navList}>
      {menus.map((menu) => {
        return (
          <li className={classes.navItem} key={menu.name}>
            <a className={classes.menuItem} href={menu.link}>
              {menu.name}
            </a>

            {menu.subMenus && (
              <ul className={classes.subMenu}>
                {menu.subMenus.map((sub) => (
                  <li key={sub.name}>
                    <a href={sub.link}>{sub.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
