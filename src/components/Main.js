import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
export const defaultListData = [
  {
    name: "Dapibus ac facilisis in",
  },
  {
    name: "Morbi leo risus",
  },
  {
    name: "Porta ac consectetur ac",
  },
  {
    name: "Porta ac doesfvsaard  asdas",
  },
];

function UserSettings() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  function handleTests(index) {
    setSelectedIndex(index);
  }

  return (
    <div>
      {defaultListData.map((category, i) => (
        <ListGroup key={category.name} variant="flush">
          <ListGroup.Item
            onClick={(e) => handleTests(i)}
            style={{ display: "flex", gap: "50px" }}
          >
            {category.name}

            <FontAwesomeIcon
              style={{ color: "green", cursor: "pointer" }}
              icon={selectedIndex === i ? <FaMoon/> : <FaSun />}
            />
          </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
}

export default UserSettings;
