// import { View, Text } from "react-native";
// import React from "react";

// export default function HomeSkeleton() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         // justifyContent: "center",
//         alignItems: "center",
//         paddingHorizontal: 10,
//       }}
//     >
//       <View style={{ height: 80 }} />
//       {/* <ActivityIndicator size={"large"} color={"#212529"} /> */}
//       <View
//         style={{
//           // flex: 1,
//           backgroundColor: "#666666",
//           width: "100%",
//           height: 120,
//           marginBottom: 10,
//         }}
//       />
//       <View style={{ flexDirection: "row", width: "100%", marginBottom: 10 }}>
//         <View
//           style={{
//             width: 50,
//             height: 60,
//             borderRadius: 8,
//             backgroundColor: "#666666",
//             marginRight: 4,
//           }}
//         />
//         <View
//           style={{
//             width: 50,
//             height: 60,
//             borderRadius: 8,
//             backgroundColor: "#666666",
//             marginRight: 4,
//           }}
//         />
//         <View
//           style={{
//             width: 50,
//             height: 60,
//             borderRadius: 8,
//             backgroundColor: "#666666",
//             marginRight: 4,
//           }}
//         />
//         <View
//           style={{
//             width: 50,
//             height: 60,
//             borderRadius: 8,
//             backgroundColor: "#666666",
//             marginRight: 4,
//           }}
//         />
//         <View
//           style={{
//             width: 50,
//             height: 60,
//             borderRadius: 8,
//             backgroundColor: "#666666",
//             marginRight: 4,
//           }}
//         />
//         <View
//           style={{
//             width: 50,
//             height: 60,
//             borderRadius: 8,
//             backgroundColor: "#666666",
//             marginRight: 4,
//           }}
//         />
//       </View>
//       <View
//         style={{
//           // flex: 1,
//           width: "100%",
//           marginBottom: 10,
//           flexDirection: "row",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         <View
//           style={{
//             // flex: 1,
//             backgroundColor: "#666666",
//             width: "48%",
//             height: 120,
//             marginBottom: 10,
//             marginRight: 4,
//           }}
//         />
//         <View
//           style={{
//             // flex: 1,
//             backgroundColor: "#666666",
//             width: "48%",
//             height: 120,
//             marginBottom: 10,
//             marginRight: 4,
//           }}
//         />
//         <View
//           style={{
//             // flex: 1,
//             backgroundColor: "#666666",
//             width: "48%",
//             height: 120,
//             marginBottom: 10,
//             marginRight: 4,
//           }}
//         />
//         <View
//           style={{
//             // flex: 1,
//             backgroundColor: "#666666",
//             width: "48%",
//             height: 120,
//             marginBottom: 10,
//             marginRight: 4,
//           }}
//         />
//       </View>
//     </View>
//   );
// }
import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";

export default function HomeSkeleton() {
  const animatedBackgrounds = useRef([]);

  useEffect(() => {
    const views = [
      // Reference views directly using their React keys or refs
      view1Ref.current,
      view2Ref.current,
      // ... Add references to other views with background colors
    ];

    animatedBackgrounds.current = views.map((view, index) => {
      const animatedColor = new Animated.Value(0);
      Animated.timing(animatedColor, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();

      return animatedColor;
    });
  }, []);

  const view1Ref = useRef(null);
  const view2Ref = useRef(null);
  // ... Create refs for other views as needed

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <View style={{ height: 80 }} />
      <View
        ref={view1Ref}
        style={{
          // ... styles for view 1
          backgroundColor: `#666666${animatedBackgrounds.current[0]}`,
        }}
      />
      <View
        ref={view2Ref}
        style={{
          // ... styles for view 2
          backgroundColor: `#666666${animatedBackgrounds.current[1]}`,
        }}
      />
      {/* ... other views with animated backgrounds, using corresponding refs and animatedColor values */}
    </View>
  );
}
