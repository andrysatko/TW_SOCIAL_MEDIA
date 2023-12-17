// import { useRef, useEffect, useCallback, useState } from "react";

// export const useDetectScrolledToBottom = (node) => {
//   const [isBottom, setIsBottom] = useState(false);
//   const handleScroll = useCallback(() => {
//     const { scrollTop, scrollHeight, clientHeight } = node.current;
//     if (scrollTop + clientHeight === scrollHeight) {
//       console.log("reached bottom hook");
//       setIsBottom(true);
//     } else {
//       setIsBottom(false);
//     }
//   }, [node]);
//   useEffect(() => {
//     if (node.current) {
//       node.current.addEventListener("scroll", handleScroll);
//       return () => node.current.removeEventListener("scroll", handleScroll);
//     }
//   }, [node, handleScroll]);
//   return { isBottom };
// };

// export const InfiniteLoadComponent = (props:any) => {
//   const node = useRef();
//   const handleScroll = useCallback(() => {
//     const { scrollTop, scrollHeight, clientHeight } = node.current;
//     if (scrollTop + clientHeight === scrollHeight) {
//       console.log("reached bottom hook in scroll component");
//     } else {
//     }
//   }, [node]);
//   useEffect(() => {
//     if (node.current) {
//       node.current.addEventListener("scroll", handleScroll);
//       return () => node.current.removeEventListener("scroll", handleScroll);
//     }
//   }, [node, handleScroll]);
//   return (
//     <div {...props} ref={node}>
//       {props.children}
//     </div>
//   );
// };
