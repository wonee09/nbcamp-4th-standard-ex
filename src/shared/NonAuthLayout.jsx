import React, { useEffect } from "react";

const NonAuthLayout = () => {
  // 만약에 로그인이 되어있는 경우!!!
  // => (1) 메인 페이지로 이동 시켜줌

  const navigator = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigator.push("/");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NonAuthLayout;
