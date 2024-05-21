import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNav from "./MainNav";
import App from "../App";
import LoginPage from "../comps/LoginPage";
import JoinPage from "../comps/JoinPage";
import BBsMainPage from "../comps/BBsMainPage";
import BBsWritePage from "../comps/BBsWrite";
import BookMain from "../comps/BookMainPage";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      // 처음 루트로 접속할때 App 컴포넌트를 보여줘
      // "/bbs", "/user" 로 접속하면 App 의 children 으로 부착시켜서 보여줘
      path: "/",
      element: <App />,
      children: [
        { path: "/book", element: <BookMain /> },
        {
          path: "/bbs",
          element: <BBsMainPage />,
          children: [
            { path: "notice", element: <h1>공지사항</h1> },
            // :item 은 변수(어떤 문자열이 와도 좋음)
            // /bbs/notice/write, /bbs/free/write 요청이 오면 밑의 컴포넌트 실행
            { path: ":item/write", element: <BBsWritePage /> },
            { path: "free", element: <h1>자유게시판</h1> },
          ],
        },

        {
          path: "/user",

          children: [
            { path: "login", element: <LoginPage /> },
            { path: "join", element: <JoinPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouter;
