import type { Dispatch } from "react";
import { Icons } from "./Icons";

interface BigPictureViewProps {
  imgUrl?: string;
  onClose: Dispatch<void>;
}

export default function BigPictureView({ imgUrl, onClose } : BigPictureViewProps) {
  return (
    <div className="fixed left-1/2 top-1/2 z-10 h-auto w-screen -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="rounded-md p-56 shadow-md">
        <div className="flex w-full items-center justify-end">
          <a className="m-3 cursor-pointer">
            <Icons.x onClick={() => onClose()} />
          </a>
        </div>
        <img src={imgUrl} />
      </div>
    </div>
  );
}
