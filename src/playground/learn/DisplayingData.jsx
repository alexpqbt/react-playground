const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <div className="component">
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt="Profile of Hedy Lamarr"
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}
