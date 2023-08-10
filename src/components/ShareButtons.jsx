/* eslint-disable react/prop-types */
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardDocumentIcon, AtSymbolIcon } from "@heroicons/react/24/outline";

const ShareButtons = ({ recipeName, recipeId }) => {
  // state
  const [copied, setCopied] = useState(false);

  // some calculated values
  const shareLink = window.location.origin + `/recipes/${recipeId}`;
  const encodedSubject = encodeURIComponent(`WBS Cookbook - ${recipeName}`);
  const encodedBody = encodeURIComponent(`Check out this awesome recipe:\n${shareLink}`);
  const encodedLink = `mailto:?Subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <div className="flex gap-4 items-center">
      {/* Share Link Button */}
      <CopyToClipboard text={shareLink} onCopy={() => setCopied(true)}>
        <button className="text-sm p-2 rounded-lg bg-white border border-grey-200 flex items-center gap-2 hover:bg-gray-200">
          <ClipboardDocumentIcon className="w-4 h-4" /> Copy link
        </button>
      </CopyToClipboard>

      {/* Share via Email button */}
      <button
        onClick={() => (window.location = encodedLink)}
        className="text-sm p-2 rounded-lg bg-white border border-grey-200 flex items-center gap-2 hover:bg-gray-200"
      >
        <AtSymbolIcon className="w-4 h-4" />
        Share via Email
      </button>
      {copied && <span className="text-gray-400">Link copied to clipboard!</span>}
    </div>
  );
};

export default ShareButtons;
