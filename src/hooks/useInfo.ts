import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getMyGithubInfo } from "../utils/requests/githubInfo";
import type { GithubInfo } from "../types/graphql";

export const useInfo = (): GithubInfo => {
  const [info, setInfo] = useLocalStorage<GithubInfo>("info", {
    status: "Helping startups deliver better software ",
    company: "Vendii",
    updatedAt: "",
    totalContributions: 1682,
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
  }, [setInfo]);

  return info;
};
