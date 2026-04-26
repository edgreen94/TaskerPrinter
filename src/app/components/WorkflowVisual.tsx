import { SectionShell, SectionHeading } from "./Section";
import WorkflowSteps from "./workflow/WorkflowSteps";
import SampleTicket from "./workflow/SampleTicket";
import ExpectationsCard from "./workflow/ExpectationsCard";

export default function WorkflowVisual() {
  return (
    <SectionShell id="workflow" className="bg-background">
      <SectionHeading
        title="Why it feels different"
        subtitle="A digital list becomes something physical, visible, and satisfying to finish."
      />

      <WorkflowSteps />

      <div className="mt-14 md:mt-16">
        <div className="rounded-[1.75rem] border border-border/70 bg-muted/25 p-4 shadow-sm ring-1 ring-black/[0.02] sm:p-5 md:p-6">
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-6">
            <SampleTicket />
            <ExpectationsCard />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
