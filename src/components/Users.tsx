"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserSearch from "../components/UserSearch";
import UserTable from "../components/UsersTable";
import { fetchUsers } from "../services/api";
import { AppDispatch } from "../redux/store";

export default function Users() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <UserSearch />
        <UserTable />
      </div>
    </div>
  );
}
