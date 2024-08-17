import Navbar from "./screens/navbar";
import Profile from "./screens/profile"

export default function Home() {
  return (
    <main className="bg-slateGreen min-h-screen">
      <Navbar />
      <Profile />
    </main>
  );
}
