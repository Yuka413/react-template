import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { TextField } from "../components/parts/TextField";
import { Button } from "../components/parts/Button";
import { useAuth } from "../hook/use-auth";

export const Login = () => {
  const { login, userName, setUserName } = useAuth();
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
