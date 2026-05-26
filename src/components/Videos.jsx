export default function Videos() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Vídeos
      </h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
          style={{
            borderRadius: "20px",
          }}
        ></iframe>
      </div>
    </section>
  )
}
