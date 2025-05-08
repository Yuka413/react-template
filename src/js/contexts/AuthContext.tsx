import * as React from "react";
import { createContext, PropsWithChildren, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	userName: string;
	setUserName:  React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
	userName: "",
	setUserName: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

// メモ
//コンテキストは、Propsを定義しなくても関数の中で定義した値をどこでも使いまわせる。
//ここの例では、AuthContextが持っているプロパティを渡せる。
// 
// キーとバリューの名前が同じオブジェクトだと、省略してかける。{isLoggedIn: isLoggedIn}ではなく、isLoggedInだけでよい。
// 
// 
// 
// 
// 
// 
