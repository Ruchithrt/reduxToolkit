import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  margin-bottom: 12px;
  text-align: left;
  position: relative;
  display: flex;
  justify-content: space-between; /* Align items to the start and end of the flex container */
  align-items: center;
`;

const UserName = styled.span`
  flex-grow: 1; /* Expand to fill remaining space */
`;

const DeleteIcon = styled.span`
  margin-left: 16px;
  cursor: pointer;
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid lightgray;
`;

export const DisplayUser = () => {
  const data = useSelector((state) => state.users);

  const deleteUser = (id) => {
    // Implement delete user functionality here
    console.log("Delete user with ID:", id);
  };

  return (
    <UserList>
      {data.map((user, id) => (
        <React.Fragment key={id}>
          <UserItem>
            <UserName>{user}</UserName>
            <DeleteIcon onClick={() => deleteUser(id)}>
              <FontAwesomeIcon icon={faTimes} />
            </DeleteIcon>
          </UserItem>
          <Line />
        </React.Fragment>
      ))}
    </UserList>
  );
};
