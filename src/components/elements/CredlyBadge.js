import React from "react";

function CredlyBadge({ width, height, imageId, imageName, badgeName, url }) {
  const imageUrl = `https://images.credly.com/size/${width}x${height}/images/${imageId}/${imageName}`;

  return (
    <a href={url} target="_blank" rel="noreferrer" className="credential-badge-link">
      <img src={imageUrl} alt={badgeName} loading="lazy" />
    </a>
  );
}

export default CredlyBadge;
