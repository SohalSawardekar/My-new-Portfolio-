import Navbar from "./screens/navbar";
import Profile from "./screens/profile"
import Footer from "./screens/footer"

export default function Home() {
  return (
    <main className="bg-slate-green min-h-screen">
      <div className="pb-7"><Navbar /></div>
      <Profile />
      <br/>
      <br/>
      <br/>
      <Footer />
    </main>
  );
}
