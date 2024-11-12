/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { userRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  // const { user } = useAuth();
  // const [loading, setLoading] = useState(true);
  // const [role, setRole] = useState();
  // useEffect(() => {
  //   setLoading(true);
  //   userRole(user?.email).then((data) => {
  //     setRole(data);
  //     setLoading(false);
  //   });
  // }, [user]);
  // return [role, loading];
  // ! implement tanstack query
  const { user, loading } = useAuth();

  const { data: role, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await userRole(user?.email),
    queryKey: ["role"],
  });
  return [role, isLoading];
};

export default useRole;
