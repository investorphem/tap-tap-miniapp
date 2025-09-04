// pages/index.js
import Head from "next/head";
// ...your existing imports

export default function Home() {
  const embed = {
    version: "1",
    imageUrl: "https://tap-tap-miniapp.vercel.app/embed.png", // 3:2 image (e.g., 1200x800)
    button: {
      title: "Open tap-tap-miniapp",
      action: {
        type: "launch_miniapp",            // required for Mini Apps
        url: "https://tap-tap-miniapp.vercel.app/",
        name: "Tap Tap Miniapp",
        splashImageUrl: "https://tap-tap-miniapp.vercel.app/splash.png", // 200x200
        splashBackgroundColor: "#0A1A2B"
      }
    }
  };

  return (
    <>
      <Head>
        {/* Mini App embed (primary) */}
        <meta name="fc:miniapp" content={JSON.stringify(embed)} />
        {/* Back-compat for some clients */}
        <meta name="fc:frame" content={JSON.stringify({
          ...embed,
          button: { ...embed.button, action: { ...embed.button.action, type: "launch_frame" } }
        })} />
        {/* Regular Open Graph (nice preview on web) */}
        <meta property="og:title" content="Tap Tap Miniapp" />
        <meta property="og:description" content="A fun, addictive mini game now on Farcaster. Tap to play and challenge your friends!" />
        <meta property="og:image" content="https://tap-tap-miniapp.vercel.app/share.png" />
      </Head>

      {/* ...your existing page UI */}
    </>
  );
}
