// import GlowingText from "@/components/GlowingText";
// import MobileAnimation from "@/components/MobileAnimation";
// import Notification from "@/components/Notification";
import QRCodeGenerator from "@/components/QrCodeGenerator";

export default function Home() {

  return (
    <div>
      <main>
        <div className="flex justify-center items-center h-screen bg-black">
          {/* <Notification/> */}
          {/* <GlowingText/> */}
          {/* <MobileAnimation/> */}
          <QRCodeGenerator text='hello world'/>
        </div>
      </main>
    </div>
  );
}
