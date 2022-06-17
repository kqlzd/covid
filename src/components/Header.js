import React, { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const Header = ({ activeTitle, onMenuChange }) => {
  const [_activeTitle, setActiveTitle] = useState(activeTitle);

  const [menuItems] = useState([
    {
      title: "Ülkelere Göre Corone Değerleri",
      value: 1,
    },
    {
      title: "Kayde Geçmiş Tüm Corona Değerleri",
      value: 2,
    },
    {
      title: "Kıtalara Göre Corone Değerleri",
      value: 3,
    },
  ]);
  return (
    <nav className="bg-blue-900 border-gray-200 text-white py-2 px-2">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Logo />
        <div className="w-auto">
          <ul className="flex flex-row mt-4 font-medium space-x-8">
            {menuItems.map((item) => {
              return (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  active={item.title === _activeTitle}
                  onClick={(title) => {
                    setActiveTitle(title);
                    onMenuChange(item.value);
                  }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
