import { ButtonLink } from "../components/ButtonLink";
import { PageHeader } from "../components/PageHeader";

export function NotFoundPage() {
  return (
    <PageHeader
      label="Error 404"
      title="This page is not on our shelf"
      intro="The link may be old or mistyped. Start from the home page or the wanted list."
    >
      <div className="actions">
        <ButtonLink to="/">Home</ButtonLink>
        <ButtonLink to="/#wanted" variant="secondary">
          Wanted list
        </ButtonLink>
      </div>
    </PageHeader>
  );
}
