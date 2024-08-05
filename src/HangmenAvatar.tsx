const HEAD = (
  <div
    style={{
      height: "40px",
      width: "40px",
      border: "10px solid black",
      borderRadius: "100%",
      position: "absolute",
      top: "35px",
      right: "-115px"
    }}
  />
);
const BODY = (
  <div
    style={{
      height: "80px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "85px",
      right: "-90px"
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      height: "10px",
      width: "80px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "-170px",
      rotate: "-20deg",
      transformOrigin: "left bottom"
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      height: "10px",
      width: "80px",
      background: "black",
      position: "absolute",
      top: "102px",
      right: "-80px",
      rotate: "20deg",
      transformOrigin: "right bottom"
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      height: "80px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "155px",
      right: "-117px",
      rotate: "-20deg",
      transformOrigin: "left bottom"
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      height: "80px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "155px",
      right: "-62px",
      rotate: "20deg",
      transformOrigin: "right bottom"
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmenAvatar = ({numberOfGuesses} : {numberOfGuesses: number}) => {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      
    <div>  {BODY_PARTS.slice(0, numberOfGuesses)} </div>
      <div
        style={{
          height: "40px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: "0px",
          left: "200px"
        }}
      />
      <div
        style={{
          height: "10px",
          width: "150px",
          background: "black",
          position: "absolute",
          top: "0px",
          left: "60px"
        }}
      />
      <div
        style={{
          height: "280px",
          width: "10px",
          background: "black",
          marginLeft: "55px"
        }}
      />
      <div
        style={{
          height: "10px",
          width: "120px",
          background: "black"
        }}
      />
    </div>
  );
};

export default HangmenAvatar;
