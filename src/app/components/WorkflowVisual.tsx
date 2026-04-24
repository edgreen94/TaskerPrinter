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

      <div className="mt-10 md:mt-12 grid gap-6 md:gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <SampleTicket />
        <ExpectationsCard />
      </div>
    </SectionShell>
  );
}
