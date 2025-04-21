import LoadingVideo from "../../assets/video/loading-screen.mp4";

export default function LoadingScreen() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#1C1C1C]">
      <video
        className="w-[200px] sm:max-w-[300px] h-[320px] aspect-video "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={LoadingVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
