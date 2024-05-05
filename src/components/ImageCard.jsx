import React from "react";

export default function ImageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-110 transition-all cursor-pointer">
      <a href={image.pageURL} target="_blank">
        <img
          src={image.webformatURL}
          alt={image.previewURL}
          className="object-cover h-48 w-96 "
        />
      </a>

      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>

        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Download: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-4 m-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
