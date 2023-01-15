import VideoList from "./videolist-component";
import Taglist from "./taglist-component";

const BodyComponent = () => {
  return (
    <div className="col-span-11 m-4 p-4">
      <div>
        <Taglist /> 
      </div>
      <div>
        <VideoList />
      </div>
    </div>
  );
};

export default BodyComponent;
