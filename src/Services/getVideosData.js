import { API_KEY } from "../Constants";
export const getVideoData = async() => {
    const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=${API_KEY}`
      );
  return (await data.json());
};
