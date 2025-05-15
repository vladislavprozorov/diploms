import React from 'react';
export const VideoLesson = ({
  title,
  videoUrl,
}: {
  title: string;
  videoUrl: string;
}) => (
  <div className="mb-6">
    <h3 className="video-container relative w-full  overflow-hidden rounded-lg shadow-lg">
      🎥 {title}
    </h3>
    <video
      controls
      autoPlay
      loop
      muted
      className="w-full h-full object-cover object-bottom"
    >
      <source src={`/assets/videos/2.MOV`} type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  </div>
);
