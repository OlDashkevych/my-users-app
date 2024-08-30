"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../interfaces";

const UserTable = () => {
  const { users, error, filters } = useSelector(
    (state: RootState) => state.users
  );

  const filteredUsers = users.filter(
    (user) =>
      user.name.includes(filters.name) &&
      user.username.includes(filters.username) &&
      user.email.includes(filters.email) &&
      user.phone.includes(filters.phone)
  );

  if (error) return <div>Failed to load users</div>;
  if (!users.length) return <div>Loading...</div>;

  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      <thead className="bg-gray-100 border-b">
        <tr>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
            Name
          </th>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
            Username
          </th>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
            Email
          </th>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
            Phone
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr key={user.id} className="border-b hover:bg-gray-50">
            <td className="py-3 px-4 text-sm text-gray-900">{user.name}</td>
            <td className="py-3 px-4 text-sm text-gray-900">{user.username}</td>
            <td className="py-3 px-4 text-sm text-gray-900">{user.email}</td>
            <td className="py-3 px-4 text-sm text-gray-900">{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
