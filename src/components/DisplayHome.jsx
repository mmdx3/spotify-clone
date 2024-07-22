import { albumsData, songsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import NavBar from "./NavBar";
import SongsItem from "./SongsItem";

const DisplayHome = () => {

  return (
    <>
      <NavBar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Chrts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((item, index) => (
            <AlbumItems
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto ">
          {songsData.map((item, index) => (
            <SongsItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
