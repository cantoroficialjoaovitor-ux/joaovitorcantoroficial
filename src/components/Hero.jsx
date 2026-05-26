import foto1 from "../images/foto1.png"

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${foto1})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      <div className="bg-black/70 p-10 rounded-3xl text-center backdrop-blur-md">
        <h1 className="text-6xl font-bold mb-4">
          João Vitor
        </h1>

        <p className="text-2xl mb-8">
          Shows • Agenda • Contratações
        </p>

        <a
          href="https://wa.me/5511986894866"
          target="_blank"
          className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition"
        >
          Contratar Show
        </a>

        <div className="flex justify-center gap-6 mt-10 text-lg font-semibold">
          <a
            href="https://instagram.com/joaovitorcantoroficial"
            target="_blank"
            className="hover:text-yellow-400"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/joaovitorcantoroficial"
            target="_blank"
            className="hover:text-yellow-400"
          >
            YouTube
          </a>

          <a
            href="https://open.spotify.com/intl-pt/artist/1NcHjMiIbcuCDUW9sg0Fls?si=yy_ALRWvSWWHva33HYJSJg"
            target="_blank"
            className="hover:text-yellow-400"
          >
            Spotify
          </a>
        </div>
      </div>
    </section>
  )
}
