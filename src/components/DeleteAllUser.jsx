import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../../src/store/actions";

const DeleteAllButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: background-color 0.3s ease;
  margin-top: 16px;
  align-self: flex-end; /* Aligns the button to the right */

  &:hover {
    background-color: #ff483b;
  }
`;

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    // Implement delete all users functionality here
    console.log("Deleting all users...");
    dispatch(deleteUsers());
  };

  return (
    <DeleteAllButton onClick={handleDeleteAll}>
      Delete All Users
    </DeleteAllButton>
  );
};
