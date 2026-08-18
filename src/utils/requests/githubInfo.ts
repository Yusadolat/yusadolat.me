import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import type { GithubInfo } from "../../types/graphql";

interface GithubApiResponse {
  data?: {
    user?: {
      company: string;
      status: {
        message: string;
        emojiHTML: string;
        updatedAt: string;
        indicatesLimitedAvailability: boolean;
      } | null;
      contributionsCollection: {
        contributionCalendar: { totalContributions: number };
      };
    } | null;
  };
}

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export const getMyGithubInfo = async (): Promise<GithubInfo | undefined> => {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GATSBY_GITHUB_API_TOKEN}`
      },
      body: JSON.stringify({
        query: `
        { user(login: "yusadolat") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            bio
            company
            status {
              message
              emojiHTML
              updatedAt
              indicatesLimitedAvailability
            }
          }
        }`
      })
    });
    const payload = (await res.json()) as GithubApiResponse;
    const user = payload.data?.user;
    if (!user || !user.status) return undefined;
    const { company, status } = user;
    const { totalContributions } =
      user.contributionsCollection.contributionCalendar;

    return {
      status: `${status.emojiHTML} ${status.message}`,
      company,
      totalContributions,
      updatedAt: timeAgo.format(new Date(status.updatedAt)),
      bussy: status.indicatesLimitedAvailability
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};
