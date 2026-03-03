import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps): JSX.Element {
  return (
    <div className="surface-card mx-auto flex w-full max-w-xl flex-col items-center gap-3 p-8 text-center">
      <div className="grid h-12 w-12 place-content-center rounded-full border border-neon/35 bg-neon/10 text-xl">◎</div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="max-w-md text-sm text-muted">{description}</p>
      {action ? <div className="pt-1">{action}</div> : null}
    </div>
  );
}
