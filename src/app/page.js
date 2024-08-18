import Navbar from "./screens/navbar";
import Profile from "./screens/profile"
import Footer from "./screens/footer"

export default function Home() {
  return (
    <main className="bg-slate-green min-h-screen">
      <Navbar />
      <Profile />
      {/* <Footer /> */}
    </main>
  );
}
