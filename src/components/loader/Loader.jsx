import { waveform } from "ldrs";

waveform.register();
function Loader() {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 text-center">
        <l-waveform
          size="40"
          stroke="3.5"
          speed="1"
          color="#A71E1E"
        ></l-waveform>
      </div>
    </div>
  );
}

export default Loader;
