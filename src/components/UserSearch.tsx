"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/userSlice";

const UserSearch = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
     <div className="grid grid-cols-4 gap-4 mb-4">
        <input
          name="name"
          onChange={handleInputChange}
          placeholder="Search by Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          name="username"
          onChange={handleInputChange}
          placeholder="Search by Username"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          name="email"
          onChange={handleInputChange}
          placeholder="Search by Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          name="phone"
          onChange={handleInputChange}
          placeholder="Search by Phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
  );
};

export default UserSearch;
