import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getMyGithubInfo } from "../utils/requests/githubInfo";

export const useInfo = () => {
  const [info, setInfo] = useLocalStorage("info", {
    status: "",
    company: "@yusadolat @ProntoAfrika",
    updatedAt: "",
    totalContributions: 0,
    bussy: false
  });

  useEffect(() => {
    const setGithubInfo = async () => {
      try {
        const newInfo = await getMyGithubInfo();
        setInfo(prevInfo => ({
          ...prevInfo,
          ...newInfo
        }));
      } catch (err) {}
    };
    setGithubInfo();
  }, []);

  return info;
};
