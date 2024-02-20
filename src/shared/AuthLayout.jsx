import React, { useEffect } from "react";

const AuthLayout = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // 토큰이 없는 경우 강제 routing
    if (!token) {
      naviagte.replace("/login");
    }

    // 컴포넌트 렌더링!!!
    setIsRendered(true);
  }, []);

  if (!isRendered) {
    return;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
