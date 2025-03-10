import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { Box,Image } from "@chakra-ui/react"
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

export const FeedPost = ({post}) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);

  return (
    <>
        <PostHeader   post={post}  creatorProfile={userProfile}  />
        <Box my={6} borderRadius={4} overflow={"hidden"}>
            <Image src={post.imageURL} alt={"FEED POST IMG"}/>
        </Box>
        <PostFooter post={post} creatorProfile={userProfile}/>
    </>
  );
};

export default FeedPost;
