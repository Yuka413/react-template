import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { useAuth } from "../hook/use-auth";
import { TextField } from "../components/parts/TextField";
import { Button } from "../components/parts/Button";
import { useNavigate } from "../../../node_modules/react-router/dist/development/index";
import { useEffect } from "react";

export const Login = () => {
  const { login, userName, setUserName, isLoggedIn, isLoginCheckDone } = useAuth();
  const navigate = useNavigate();

  //   ログイン中だった場合は、/todoに遷移させる
  useEffect(() => {
    if (isLoggedIn && isLoginCheckDone) {
      navigate("/todo");
    }
  }, [isLoggedIn, isLoginCheckDone]);

  if(!isLoginCheckDone || isLoggedIn) return null;

  return (
    <main className="text-center pt-15">
      <Heading level={"h1"}>ログイン</Heading>
      <div className="flex gap-2 justify-center pt-10">
        <TextField
          id="user-name"
          label="ユーザー名"
          type="text"
          value={userName}
          onChange={setUserName}
        />
        <Button color="blue" onClick={login}>
          ログイン
        </Button>
      </div>
    </main>
  );
};
