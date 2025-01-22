import React, { useEffect } from "react";
interface InstagramEmbedProps {
  embedLink: string; // Accepts the embed link as a prop
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ embedLink }) => {

  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [embedLink]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={embedLink}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "calc(100% - 2px)",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href={embedLink}
          style={{
            background: "#FFFFFF",
            lineHeight: "0",
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;
