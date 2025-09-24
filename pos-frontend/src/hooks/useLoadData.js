import { useEffect, useState } from "react";
import { getUserData } from "../https";
import { removeUser, setUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const useLoadData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const { data } = await getUserData();
        console.log(data);
        const { _id, name, email, phone, role } = data.data;
        dispatch(setUser({ _id, name, email, phone, role }));
      } catch (error) {
        dispatch(removeUser());
        navigate("/auth");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchuser();
  }, [dispatch, navigate]);

  return isLoading;
};

export default useLoadData;
