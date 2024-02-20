import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Header from "../redux/components/Header";
import Footer from "../redux/components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/*
       (1) 로그인 하지 않아도 접근할 수 있는 페이지 : 로그인 페이지, 회원가입 페이지
       (2) 로그인 해야만 접근할 수 있는 페이지 : 마이페이지
       */}
        <Route element={<NonAuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mysth" element={<MySth />} />
        </Route>

        {/* <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
