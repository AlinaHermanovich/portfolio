import CaseVideo from "./CaseVideo";
import CaseVisual from "./CaseVisual";

/**
 * The case cover: a grayscale video background with a browser-window
 * mockup on top. Shared by the home rail and the case-study hero so they match.
 */
export default function CaseFrame({
  video,
  preview,
  variant = 0,
  client,
  year,
  color = false,
}: {
  video?: string;
  preview?: string;
  variant?: number;
  client?: string;
  year?: string;
  color?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[4px] bg-bg-elev">
      {video ? (
        <CaseVideo src={video} color={color} />
      ) : (
        <CaseVisual variant={variant} />
      )}

      {client && (
        <span className="eyebrow absolute left-6 top-4 z-30 text-bg mix-blend-difference">
          {client}
        </span>
      )}
      {year && (
        <span className="eyebrow absolute right-6 top-4 z-30 text-bg mix-blend-difference">
          {year}
        </span>
      )}

      <div className="absolute inset-x-8 top-12 z-20 -bottom-8 overflow-hidden rounded-t-[8px] bg-bg shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-line px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        {preview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt={client ? `${client} preview` : "Case preview"}
            className="h-[calc(100%-2.25rem)] w-full object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}
