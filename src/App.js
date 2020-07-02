import React from "react";

function Food({ name, picture }) {
  return (
  <div>
    <h3>I like { name }</h3>
    <img src= { picture } />
  </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  },
  {
    name: "Samgyeopsal",
    image: "https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg",
  },
  {
    name: "Doncasu",
    image: "https://www.osp.osaka-info.jp/upload/facility_shop/58/58.jpg",
  },
  {
    name: "Kimbap",
    image: "https://i.ytimg.com/vi/2G5SAC3UI3M/maxresdefault.jpg",
  },
  {
    name: "Bibimbap",
    image: "https://i.ytimg.com/vi/6QQ67F8y2b8/maxresdefault.jpg",
  },
];

// Array 에 Map 을 사용해 각각의 데이터 조작
// const friends = ["dal", "mark", "lynn", "jg"];
// console.log(friends);
// friends.map(function(friend) {
//   console.log(friend);
//   return 0;
// });

function App() {
  return (
    <div>
      {foodILike.map( dish => <Food name = { dish.name } picture = { dish.image } /> )}
    </div>
  );
}

export default App;
