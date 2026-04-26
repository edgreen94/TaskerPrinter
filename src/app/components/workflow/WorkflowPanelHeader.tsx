type WorkflowPanelHeaderProps = {
  metaLeft: string;
  metaRight?: string;
  title: string;
  titleId?: string;
};

export default function WorkflowPanelHeader({
  metaLeft,
  metaRight,
  title,
  titleId,
}: WorkflowPanelHeaderProps) {
  return (
    <header className="shrink-0 border-b border-border/60 pb-5">
      <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="min-w-0 leading-snug">{metaLeft}</span>
        <span className="shrink-0 text-right tabular-nums leading-snug">
          {metaRight ?? "\u00a0"}
        </span>
      </div>
      <h3
        id={titleId}
        className="mt-3 text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl"
      >
        {title}
      </h3>
    </header>
  );
}
