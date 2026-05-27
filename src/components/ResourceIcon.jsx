const resourceGlyph = {
  wheat: "W",
  iron: "I",
  stone: "S",
  gems: "G",
  manuscripts: "M",
};

function ResourceIcon({ resource }) {
  switch (resource) {
    case "wheat":
      return (
        <svg
          className="tile-resource-icon"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 2v12M5.5 5.2h2.1M5.2 7h2.3M5.5 8.8h2.1M8.4 4.4h2.1M8.5 6.2h2.3M8.4 8h2.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "iron":
      return (
        <svg
          className="tile-resource-icon"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3.3 5.5h9.4l-1.1 5H4.4l-1.1-5zM4.4 10.5h7.2l1 1.9H3.4l1-1.9z"
            fill="currentColor"
          />
        </svg>
      );
    case "stone":
      return (
        <svg
          className="tile-resource-icon"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3.2 9.3 4.8 6l3.5-2 3.6 1.2L13 8.6l-2.1 3.1-4 .3L4 11z"
            fill="currentColor"
          />
        </svg>
      );
    case "gems":
      return (
        <svg
          className="tile-resource-icon"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 2.6 12.7 8 8 13.4 3.3 8 8 2.6zm0 2.1L5.2 8 8 11.2 10.8 8 8 4.7z"
            fill="currentColor"
          />
        </svg>
      );
    case "manuscripts":
      return (
        <svg
          className="tile-resource-icon"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4.2 3.2h6.5a1.3 1.3 0 0 1 1.3 1.3v7.3H5.4a1.2 1.2 0 0 0-1.2 1.2V4.4a1.2 1.2 0 0 1 1.2-1.2zm1.7 2h4.3m-4.3 2h4.3m-4.3 2h3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <span>{resourceGlyph[resource] ?? "?"}</span>;
  }
}

export default ResourceIcon;
